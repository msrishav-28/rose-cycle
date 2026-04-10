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
    
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8")

settings = Settings()
