from sqlalchemy.orm import Session
from app.models.user import User
from app.schemas import UserResponse
from app.services.auth import hash_password
from sqlalchemy.sql.expression import literal

# Функция для получения пользователя по имени
def get_user_by_username(db: Session, username: str) -> User | None:
    return db.query(User).filter(User.username == literal(username)).first()

# Функция для создания нового пользователя
def create_user(db: Session, username: str, password: str) -> UserResponse:
    hashed_password = hash_password(password)
    new_user = User(username=username, password=hashed_password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return UserResponse.from_orm(new_user)

# Функция для проверки существования пользователя по имени
def user_exists(db: Session, username: str) -> bool:
    return db.query(User).filter(User.username == literal(username)).first() is not None
