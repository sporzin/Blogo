"""
Posts model
"""
from src.db import Base
from sqlalchemy import Column, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from .meta import SoftDelete, TimeBase
from .users import User, UserPicture


class Post(Base, SoftDelete, TimeBase):
    """
    Posts SoftDelete, TimeBase
    """
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    body = Column(Text)
    writer_id = Column(Integer, ForeignKey('users.id'), index=True)

    comments = relationship("Comment", back_populates="post")
    writer = relationship("User")


class Comment(Base, SoftDelete, TimeBase):
    """
    Post comment Model
    """
    __tablename__ = "comments"

    id = Column(Integer, primary_key=True, index=True)
    body = Column(String)
    post_id = Column(Integer, ForeignKey('posts.id'))
    user_id = Column(Integer, ForeignKey('users.id'))

    post = relationship("Post", back_populates="comments")
    by = relationship("User")

