from .db import db
from sqlalchemy.types import Integer, String
from sqlalchemy.schema import Column, ForeignKey

class UserTag(db.Model):
  __tablename__ = 'user_tags'

  id = Column(Integer, primary_key=True)
  tag_id = Column(Integer, ForeignKey("tags.id"), nullable=False)
  user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

  def to_dict(self):
    return {
      "id": self.id,
      "tag_id": self.tag_id,
      "user_id": self.user_id,
    }
