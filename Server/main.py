""""
Blogo main Server file
"""
from fastapi import FastAPI
from controllers.posts import PostsRouter
from controllers.users import UserRouter
from src.db import engine, Base
from fastapi.middleware.cors import CORSMiddleware


Base.metadata.create_all(bind=engine)

Blogo = FastAPI()


origins = ['*']

Blogo.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


Blogo.include_router(PostsRouter)
Blogo.include_router(UserRouter)
