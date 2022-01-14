"""
Read User
"""
from sqlalchemy.orm import Session
from models.users import User as MUser
from schemas.users import UserCreate


def read_user(db: Session, user_id: int):
    """
    Get User
    """
    return db.query(MUser).filter(MUser.id == user_id).first()


def create_user(db: Session, user: UserCreate):
    """
    Create a user
    """
    _user = MUser(
        name = user.name,
        email = user.email,
        hashed_password = user.password,
        is_active = user.is_active,
    )
    db.add(_user)
    db.commit()
    db.refresh(_user)
    return _user