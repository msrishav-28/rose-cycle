import json
from urllib.request import urlopen
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import jwt
from app.core.config import settings

security = HTTPBearer()

def get_clerk_jwks():
    """Fetch public keys from Clerk to evaluate JWT signatures"""
    url = f"{settings.CLERK_FRONTEND_API}/.well-known/jwks.json"
    response = urlopen(url)
    return json.loads(response.read())

def get_current_user_clerk_id(credentials: HTTPAuthorizationCredentials = Depends(security)) -> str:
    """
    Validates the bearer token against Clerk JWKS.
    Returns the user's clerk_id (Subject).
    In a real app, you might want to cache the JWKS for performance.
    """
    if not settings.CLERK_FRONTEND_API:
        # Dev fallback if Clerk is bypassing or not configured yet
        return "user_placeholder_123"

    token = credentials.credentials
    try:
        jwks = get_clerk_jwks()
        unverified_header = jwt.get_unverified_header(token)
        
        rsa_key = {}
        for key in jwks["keys"]:
            if key["kid"] == unverified_header["kid"]:
                rsa_key = {
                    "kty": key["kty"],
                    "kid": key["kid"],
                    "use": key["use"],
                    "n": key["n"],
                    "e": key["e"]
                }
        if rsa_key:
            payload = jwt.decode(
                token,
                rsa_key,
                algorithms=["RS256"],
                audience=settings.CLERK_FRONTEND_API,
                issuer=settings.CLERK_FRONTEND_API
            )
            return payload["sub"]
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Invalid authentication credentials: {str(e)}",
            headers={"WWW-Authenticate": "Bearer"},
        )
    
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid authentication credentials (kid not matched)",
        headers={"WWW-Authenticate": "Bearer"},
    )
