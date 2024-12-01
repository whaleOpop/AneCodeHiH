from pydantic import BaseModel
from typing import List, Optional

# Схема для токена
class Token(BaseModel):
    access_token: str
    token_type: str

# Схема для данных пользователя
class UserResponse(BaseModel):
    id: int
    username: str

    class Config:
        orm_mode = True

# Схема для авторизации
class UserLogin(BaseModel):
    username: str
    password: str
