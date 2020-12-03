from .db import db
from sqlalchemy.types import Integer, String
from sqlalchemy.schema import Column, ForeignKey

class Post(db.Model):
  __tablename__ = 'posts'

  id = Column(Integer, primary_key=True)
  body = Column(String, nullable=False)
  user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

  def to_dict(self):
    return {
      "id": self.id,
      "body": self.body,
      "user_id": self.user_id,
    }
