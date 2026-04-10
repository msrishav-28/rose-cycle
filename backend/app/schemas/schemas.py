from pydantic import BaseModel
from typing import Optional
from datetime import date

class DailyLogCreate(BaseModel):
    date: date
    flow: Optional[str] = None
    mood: Optional[str] = None
    pain_level: Optional[int] = None
    notes: Optional[str] = None

class DailyLogResponse(DailyLogCreate):
    id: int
    user_id: int
    
    class Config:
        from_attributes = True

class CycleInsight(BaseModel):
    current_day: int
    phase_name: str
    next_period_in_days: int
    proactive_insight: str
