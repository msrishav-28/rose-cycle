import json
import time
from urllib.request import urlopen
from urllib.error import URLError
from typing import Optional
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import jwt
from app.core.config import settings

security = HTTPBearer(auto_error=False)


class AuthError(Exception):
    """Raised when token validation fails."""


_jwks_cache = {
    "value": None,
    "expires_at": 0,
}

def get_clerk_jwks():
    """Fetch public keys from Clerk to evaluate JWT signatures"""
    now = int(time.time())
    if _jwks_cache["value"] and now < _jwks_cache["expires_at"]:
        return _jwks_cache["value"]

    url = f"{settings.CLERK_FRONTEND_API}/.well-known/jwks.json"
    try:
        response = urlopen(url, timeout=5)
        jwks = json.loads(response.read())
    except URLError as exc:
        raise AuthError(f"Unable to fetch Clerk JWKS: {str(exc)}")

    _jwks_cache["value"] = jwks
    _jwks_cache["expires_at"] = now + max(30, settings.CLERK_JWKS_CACHE_TTL_SECONDS)
    return jwks


def _build_rsa_key(jwks: dict, kid: str) -> Optional[dict]:
    for key in jwks.get("keys", []):
        if key.get("kid") == kid:
            return {
                "kty": key.get("kty"),
                "kid": key.get("kid"),
                "use": key.get("use"),
                "n": key.get("n"),
                "e": key.get("e"),
            }
    return None


def verify_clerk_token(token: Optional[str]) -> str:
    """
    Verifies a Clerk JWT and returns clerk user id (sub).

    If Clerk frontend API is not configured, returns a placeholder dev user id
    to preserve local MVP workflows.
    """
    if not settings.CLERK_FRONTEND_API:
        return "user_placeholder_123"

    if not token:
        raise AuthError("Missing bearer token")

    try:
        jwks = get_clerk_jwks()
        unverified_header = jwt.get_unverified_header(token)
        rsa_key = _build_rsa_key(jwks, unverified_header.get("kid"))
        if not rsa_key:
            raise AuthError("Invalid authentication credentials (kid not matched)")

        payload = jwt.decode(
            token,
            rsa_key,
            algorithms=["RS256"],
            audience=settings.CLERK_FRONTEND_API,
            issuer=settings.CLERK_FRONTEND_API,
        )
        return payload["sub"]
    except AuthError:
        raise
    except Exception as exc:
        raise AuthError(f"Invalid authentication credentials: {str(exc)}")


def get_current_user_clerk_id_from_token(token: Optional[str]) -> str:
    """Websocket-friendly wrapper around token verification."""
    return verify_clerk_token(token)

def get_current_user_clerk_id(credentials: HTTPAuthorizationCredentials = Depends(security)) -> str:
    """
    Validates the bearer token against Clerk JWKS.
    Returns the user's clerk_id (Subject).
    In a real app, you might want to cache the JWKS for performance.
    """
    token = credentials.credentials if credentials else None
    try:
        return verify_clerk_token(token)
    except AuthError as exc:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=str(exc),
            headers={"WWW-Authenticate": "Bearer"},
        )
