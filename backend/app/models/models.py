from sqlalchemy import Column, Integer, String, Dict, JSON, DateTime, Date, Boolean, ForeignKey
from app.db.database import Base
import datetime

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    clerk_id = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    preferences = Column(JSON, default={})
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class DailyLog(Base):
    __tablename__ = "daily_logs"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    date = Column(Date, index=True)
    flow = Column(String, nullable=True) # None, Light, Medium, Heavy
    mood = Column(String, nullable=True) # e.g. 'happy', 'tired'
    pain_level = Column(Integer, nullable=True) # 1-4 scale
    notes = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
