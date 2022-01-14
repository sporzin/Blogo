"""
Users Model
"""
from src.db import Base
from .meta import SoftDelete, TimeBase
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy_imageattach.entity import Image, image_attachment


class User(Base, SoftDelete, TimeBase):
    """
    User model
    """
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    avatar = image_attachment('UserPicture')
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String)
    is_active = Column(Boolean, default=True)


class UserPicture(Base, Image):
    """User picture model."""
    __tablename__ = 'users_picture'

    user_id = Column(Integer, ForeignKey('users.id'), primary_key=True)
    user = relationship('User')
