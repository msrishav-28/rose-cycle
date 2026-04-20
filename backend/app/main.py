from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.db.database import Base, engine
import app.models.models  # noqa: F401

app = FastAPI(
    title=settings.PROJECT_NAME,
    version="1.0.0",
    description="Backend for RoseCycle AI Health Assistant"
)

from app.api.v1.api import api_router


def parse_cors_origins(raw_origins: str) -> list[str]:
    origins = [origin.strip() for origin in raw_origins.split(",") if origin.strip()]
    return origins or ["*"]

# Set all CORS enabled origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=parse_cors_origins(settings.BACKEND_CORS_ORIGINS),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(api_router, prefix="/api/v1")


@app.on_event("startup")
def on_startup():
    # MVP bootstrap: ensure required tables exist for local/dev and simple deployments.
    Base.metadata.create_all(bind=engine)

@app.get("/")
def root():
    return {"message": "RoseCycle API is live."}

@app.get("/health")
def health_check():
    return {"status": "healthy"}
