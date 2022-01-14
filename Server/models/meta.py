"""
Meta model for generating generic models
"""
from datetime import datetime

from sqlalchemy import Column, DateTime

from src.db import Base


class TimeBase:
    """
    Time base has created at
    """
    created_at = Column(DateTime, default=datetime.utcnow)


class SoftDelete:
    """
    Soft delete
    """
    deleted_at = Column(DateTime, nullable=True)

    @property
    def is_deleted(self):
        return self.removed_at is not None

    def soft_delete(self, ignore_errors=False):
        if not ignore_errors:
            self.assert_is_not_deleted()
        self.removed_at = datetime.now()

    @classmethod
    def exclude_deleted(cls, query=None):
        # noinspection PyUnresolvedReferences
        return (query or cls.query).filter(cls.removed_at.is_(None))
