"""
Util
"""

from src.db import SessionLocal


# Dependency
def get_db():
    """
    Getting DataBase and create a session for it.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
