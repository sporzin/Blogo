"""
Setting file
"""
from dotenv import load_dotenv
from os import environ

load_dotenv()

SECRET_KEY = "09d25e094faa6ca2556c818166b7a9563b93f7099f6f0f4caa6cf63b88e8d3e7"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30


# DB
class Database(object):
    """
    Database config Object
    """
    database = environ.get("DB", None)
    user = environ.get("POSTGRES_USER", None)
    password = environ.get("POSTGRES_PASSWORD", None)
    db = environ.get("POSTGRES_DB", None)
    host = environ.get("POSTGRES_HOST", None)
    port = environ.get("POSTGRES_PORT", None)
