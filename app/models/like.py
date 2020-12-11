from .db import db
from sqlalchemy.types import Integer, String
from sqlalchemy.schema import Column, ForeignKey, UniqueConstraint

class Like(db.Model):
  __tablename__ = 'likes'

  id = Column(Integer, primary_key=True)
  post_id = Column(Integer, ForeignKey("posts.id"), nullable=True)
  photo_id = Column(Integer, ForeignKey("photos.id"), nullable=True)
  user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
  __table_args__ = (UniqueConstraint('post_id', 'user_id', name='_post_user_uc'),)

  post = db.relationship("Post", backref="likes", foreign_keys=[post_id])

  def to_dict(self):
    return {
      "id": self.id,
      "post_id": self.post_id,
      "photo_id": self.photo_id,
      "user_id": self.user_id
    }
