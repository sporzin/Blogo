"""
Setting file
"""
from dotenv import load_dotenv
from os import environ

load_dotenv()


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
