from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import Optional

class Settings(BaseSettings):
    PROJECT_NAME: str = "RoseCycle"
    # Database
    DATABASE_URL: Optional[str] = None # Will be supplied by neon db
    
    # Auth (Clerk)
    CLERK_SECRET_KEY: Optional[str] = None
    CLERK_FRONTEND_API: Optional[str] = None
    
    # LLM Inference Flags
    HUGGINGFACE_API_KEY: Optional[str] = None
    DEEPSEEK_API_KEY: Optional[str] = None
    HUGGINGFACE_MODEL: str = "mistralai/Mistral-7B-Instruct-v0.2"
    DEEPSEEK_MODEL: str = "deepseek-chat"

    # Backend runtime
    BACKEND_CORS_ORIGINS: str = "http://localhost:5173,http://127.0.0.1:5173"

    # Auth/JWKS
    CLERK_JWKS_CACHE_TTL_SECONDS: int = 300
    
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

settings = Settings()
