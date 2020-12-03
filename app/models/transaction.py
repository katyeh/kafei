from .db import db
from sqlalchemy.types import Integer, String
from sqlalchemy.schema import Column, ForeignKey

class Transaction(db.Model):
  __tablename__ = 'transactions'

  id = Column(Integer, primary_key=True)
  amount = Column(Integer, ForeignKey("tracks.id"), nullable=False)
  sender_id = Column(Integer, ForeignKey("users.id"), nullable=False)
  recipient_id = Column(Integer, ForeignKey("users.id"), nullable=False)

  def to_dict(self):
    return {
      "id": self.id,
      "amount": self.amount,
      "sender_id": self.sender_id,
      "recipient_id": self.recipient_id
    }
