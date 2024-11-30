from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from .models import User
from .schemas import UserLogin, UserCreate
from .database import get_db
from .utils import hash_password, verify_password
from sqlalchemy.sql.expression import literal

router = APIRouter()


@router.post("/register")
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    existing_user = db.query(User).filter(User.username == literal(user.username)).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Username already registered")

    new_user = User(username=user.username, password_hash=hash_password(user.password))
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"message": "User registered successfully"}


@router.post("/login")
def login_user(user: UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.username == literal(user.username)).first()
    if not db_user or not verify_password(user.password, db_user.password_hash):
        raise HTTPException(status_code=401, detail="Invalid username or password")

    return {"message": "Login successful"}
