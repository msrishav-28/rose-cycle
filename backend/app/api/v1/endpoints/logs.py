from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.models.models import DailyLog, User
from app.schemas.schemas import DailyLogCreate, DailyLogResponse
from app.middleware.auth import get_current_user_clerk_id

router = APIRouter()

def get_or_create_user(db: Session, clerk_id: str):
    user = db.query(User).filter(User.clerk_id == clerk_id).first()
    if not user:
        user = User(clerk_id=clerk_id, email=f"{clerk_id}@placeholder.com")
        db.add(user)
        db.commit()
        db.refresh(user)
    return user

@router.post("/", response_model=DailyLogResponse)
def create_daily_log(
    log_in: DailyLogCreate, 
    db: Session = Depends(get_db), 
    clerk_id: str = Depends(get_current_user_clerk_id)
):
    user = get_or_create_user(db, clerk_id)
    
    # Check if a log for this date exists
    existing_log = db.query(DailyLog).filter(
        DailyLog.user_id == user.id, 
        DailyLog.date == log_in.date
    ).first()
    
    if existing_log:
        # Update existing
        for var, value in log_in.model_dump(exclude_unset=True).items():
            setattr(existing_log, var, value)
        db.commit()
        db.refresh(existing_log)
        return existing_log
    else:
        # Create new
        new_log = DailyLog(user_id=user.id, **log_in.model_dump())
        db.add(new_log)
        db.commit()
        db.refresh(new_log)
        return new_log

@router.get("/", response_model=list[DailyLogResponse])
def get_logs(
    db: Session = Depends(get_db), 
    clerk_id: str = Depends(get_current_user_clerk_id)
):
    user = get_or_create_user(db, clerk_id)
    return (
        db.query(DailyLog)
        .filter(DailyLog.user_id == user.id)
        .order_by(DailyLog.date.desc())
        .all()
    )
