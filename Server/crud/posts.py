"""
CRUD for Posts
"""

from sqlalchemy.orm import Session

from models.posts import Post as MPost
from schemas.posts import PostCreate


def create_post(db: Session, post: PostCreate):
    """
    Create Post
    """
    _post = MPost(
        title=post.title,
        body=post.body,
        writer_id=post.writer
    )
    db.add(_post)
    db.commit()
    db.refresh(_post)
    return _post


def search_post_by_title(db: Session, query):
    """
    Search via database to find a post
    """
    return db.query(MPost).filter(MPost.title.like('%' + query + '%')).all()


def read_post_by_id(db: Session, post_id: int):
    """
    get post by id
    :param db:
    :param post_id:
    :return:
    """
    return db.query(MPost).filter(MPost.id == post_id).first()
