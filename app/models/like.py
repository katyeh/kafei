from .db import db
from sqlalchemy.types import Integer, String
from sqlalchemy.schema import Column, ForeignKey

class Like(db.Model):
  __tablename__ = 'likes'

  id = Column(Integer, primary_key=True)
  post_id = Column(Integer, ForeignKey("posts.id"), nullable=True)
  photo_id = Column(Integer, ForeignKey("photos.id"), nullable=True)
  user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

  def to_dict(self):
    return {
      "id": self.id,
      "post_id": self.post_id,
      "photo_id": self.photo_id,
      "user_id": self.user_id
    }
