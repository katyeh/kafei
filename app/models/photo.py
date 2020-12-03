from .db import db
from sqlalchemy.types import Integer, String
from sqlalchemy.schema import Column, ForeignKey

class Photo(db.Model):
  __tablename__ = 'photos'

  id = Column(Integer, primary_key=False)
  pic_url = Column(String, nullable=False)
  user_id = Column(Integer, ForeignKey("users.id"), nullable=True)

  def to_dict(self):
    return {
      "id": self.id,
      "pic_url": self.pic_url,
      "user_id": self.user_id,
    }
