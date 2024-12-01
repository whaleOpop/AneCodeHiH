from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.db import crud
from app.db.database import get_db
from app.schemas import UserResponse
from app.services.auth import get_current_user

router = APIRouter()

@router.get("/me", response_model=UserResponse)
def get_user_data(current_user: str = Depends(get_current_user), db: Session = Depends(get_db)):
    user = crud.get_user_by_username(db, current_user)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

