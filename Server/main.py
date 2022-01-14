""""
Blogo main Server file
"""
from fastapi import FastAPI
from controllers.posts import PostsRouter
from controllers.users import UserRouter
from src.db import engine, Base


Base.metadata.create_all(bind=engine)

Blogo = FastAPI()

Blogo.include_router(PostsRouter)
Blogo.include_router(UserRouter)
