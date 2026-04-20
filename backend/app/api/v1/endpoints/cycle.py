from datetime import date
from statistics import mean
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.database import get_db
from app.models.models import DailyLog, User
from app.schemas.schemas import CycleInsight
from app.middleware.auth import get_current_user_clerk_id

router = APIRouter()


def get_or_create_user(db: Session, clerk_id: str) -> User:
    user = db.query(User).filter(User.clerk_id == clerk_id).first()
    if not user:
        user = User(clerk_id=clerk_id, email=f"{clerk_id}@placeholder.com")
        db.add(user)
        db.commit()
        db.refresh(user)
    return user


def is_period_flow(flow: str | None) -> bool:
    if not flow:
        return False
    return flow.strip().lower() not in {"none", "", "null"}


def compute_phase(current_day: int) -> str:
    if current_day <= 5:
        return "Menstrual Phase"
    if current_day <= 13:
        return "Follicular Phase"
    if current_day <= 16:
        return "Ovulatory Phase"
    return "Luteal Phase"


def build_proactive_insight(logs: list[DailyLog], avg_cycle_length: int | None) -> str:
    if not logs:
        return (
            "Start by logging flow, mood, and pain daily for 2-3 weeks so RoseCycle "
            "can generate more personalized cycle insights."
        )

    last_30_days = [l for l in logs if (date.today() - l.date).days <= 30]
    severe_pain_days = sum(1 for l in last_30_days if (l.pain_level or 0) >= 7)

    if severe_pain_days >= 3:
        return (
            "You've logged higher pain on multiple recent days. This may be worth "
            "discussing with a healthcare professional if it continues."
        )

    mood_counts = {}
    for log in last_30_days:
        if log.mood:
            mood_counts[log.mood] = mood_counts.get(log.mood, 0) + 1

    if mood_counts:
        top_mood = max(mood_counts, key=mood_counts.get)
        return (
            f"Your most frequently logged mood recently is '{top_mood}'. Keep tracking "
            "to identify phase-based mood patterns over time."
        )

    if avg_cycle_length:
        return (
            f"Based on your logged flow history, your cycle pattern is trending around "
            f"{avg_cycle_length} days. Predictions will improve as you keep logging."
        )

    return "Keep logging daily to improve insight quality and prediction reliability."

@router.get("/insights", response_model=CycleInsight)
def get_cycle_insights(
    clerk_id: str = Depends(get_current_user_clerk_id),
    db: Session = Depends(get_db),
):
    user = get_or_create_user(db, clerk_id)
    logs = (
        db.query(DailyLog)
        .filter(DailyLog.user_id == user.id)
        .order_by(DailyLog.date.asc())
        .all()
    )

    period_dates = [log.date for log in logs if is_period_flow(log.flow)]
    period_dates = sorted(set(period_dates))

    start_dates: list[date] = []
    for d in period_dates:
        if not start_dates or (d - start_dates[-1]).days > 1:
            start_dates.append(d)

    avg_cycle_length = None
    if len(start_dates) >= 2:
        cycle_lengths = [
            (start_dates[i] - start_dates[i - 1]).days
            for i in range(1, len(start_dates))
            if (start_dates[i] - start_dates[i - 1]).days > 0
        ]
        if cycle_lengths:
            avg_cycle_length = max(21, min(40, round(mean(cycle_lengths[-6:]))))

    last_start = start_dates[-1] if start_dates else None
    if last_start:
        current_day = max(1, (date.today() - last_start).days + 1)
    else:
        current_day = 1

    if avg_cycle_length:
        next_period_in_days = max(0, avg_cycle_length - (current_day - 1))
    else:
        next_period_in_days = max(0, 28 - (current_day - 1))

    phase_name = compute_phase(current_day)
    proactive_insight = build_proactive_insight(logs, avg_cycle_length)

    return CycleInsight(
        current_day=current_day,
        phase_name=phase_name,
        next_period_in_days=next_period_in_days,
        proactive_insight=proactive_insight,
    )
