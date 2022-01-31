""""
Blogo main Server file
"""
from fastapi import FastAPI
from controllers.posts import PostsRouter
from controllers.users import UserRouter
from controllers.auth import AuthRouter
from src.db import engine, Base


Base.metadata.create_all(bind=engine)

Blogo = FastAPI()

Blogo.include_router(PostsRouter)
Blogo.include_router(UserRouter)
Blogo.include_router(AuthRouter)
