from .db import db
from sqlalchemy.types import Integer, String
from sqlalchemy.schema import Column, ForeignKey
from sqlalchemy.orm import relationship

class Post(db.Model):
  __tablename__ = 'posts'

  id = Column(Integer, primary_key=True)
  body = Column(String, nullable=False)
  user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

  comments = db.relationship('Comment', cascade='all, delete', backref='post')

  def to_dict(self):
    return {
      "id": self.id,
      "body": self.body,
      "user_id": self.user_id,
      "likes": [like.to_dict() for like in self.likes]
    }
