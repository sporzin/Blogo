"""
Database Base and db_session  creator
"""
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from .setting import Database

DB_URL = f'{Database.database}://{Database.user}:{Database.password}@{Database.host}/{Database.db}'
print(DB_URL)
engine = create_engine(
    DB_URL
)
SessionLocal = sessionmaker(autoflush=False, bind=engine)

Base = declarative_base()

