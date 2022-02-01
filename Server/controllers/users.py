"""
Users Controller
"""
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from schemas.users import UserCreate, User
from crud.users import read_user, create_user
from src.util import get_db

UserRouter = APIRouter(prefix="/users", tags=["users"])


@UserRouter.get("/{user_id}", response_model=User)
def _read_user(user_id: int, db: Session = Depends(get_db)):
    """
    Reading User
    """
    user = read_user(db, user_id)
    if not user:
        return HTTPException(status_code=404, detail="User not Found")

    return user


@UserRouter.post("", response_model=User)
def _create_user(user: UserCreate, db: Session = Depends(get_db)):
    """
    Creating user
    """
    return create_user(db, user)
