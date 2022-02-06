"""
Posts Router(Controller)
"""
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from schemas.posts import PostCreate, Post
from crud.posts import read_post_by_id, create_post
from crud.users import read_user
from src.util import get_db
PostsRouter = APIRouter(prefix="/posts", tags=["Posts"])


@PostsRouter.get("/{post_id}", response_model=Post)
def read_post(post_id: int, db: Session = Depends(get_db)):
    """
    main to just say hello!
    :return:
    """
    post = read_post_by_id(db, post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return post


@PostsRouter.post('', response_model=Post)
def make_post(post: PostCreate, db: Session = Depends(get_db)):
    """
    Adding a post
    """
    if not read_user(db, post.writer):
        raise HTTPException(status_code=400, detail="User not found")
    return create_post(db, post)
