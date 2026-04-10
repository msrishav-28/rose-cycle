from fastapi import APIRouter
from app.api.v1.endpoints import logs, cycle, chat

api_router = APIRouter()
api_router.include_router(logs.router, prefix="/logs", tags=["logs"])
api_router.include_router(cycle.router, prefix="/cycle", tags=["cycle"])
api_router.include_router(chat.router, prefix="/chat", tags=["chat"])
