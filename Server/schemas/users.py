from pydantic import BaseModel


class UserBase(BaseModel):
    """
    User base
    """
    name: str
    email: str
    is_active: bool


class UserCreate(UserBase):
    """
    Creating user
    """
    password: str


class User(UserBase):
    """
    User Default
    """
    id: int

    class Config:
        """
        BaseModel Configuration
        """
        orm_mode = True
