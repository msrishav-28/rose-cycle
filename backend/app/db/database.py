from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from app.core.config import settings

# Example neon string for dev if not provided:
# postgresql://[user]:[password]@[neon_hostname]/[dbname]?sslmode=require
DATABASE_URL = settings.DATABASE_URL or "sqlite:///./test.db" # fallback for dev testing

engine = create_engine(
    DATABASE_URL, 
    # NeonDB requires SSL and pooling, but SQLalchemy default handles it well. 
    # Use connect_args={"check_same_thread": False} only for fallback SQLite
    connect_args={"check_same_thread": False} if "sqlite" in DATABASE_URL else {}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
