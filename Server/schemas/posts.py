"""
Schema for posts
"""
from pydantic import BaseModel
from schemas.users import User


class PostBase(BaseModel):
    """
    Post base
    """
    title: str
    body: str
    writer: int


class PostCreate(PostBase):
    """
    Post Create
    """
    pass


class Post(PostBase):
    """
    Post Default
    """
    id: int
    writer: User

    class Config:
        """
        BaseModel Configuration
        """
        orm_mode = True
