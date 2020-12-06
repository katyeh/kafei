from flask_wtf import FlaskForm
from wtforms import StringField, FileField, BooleanField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


class UploadPhotoForm(FlaskForm):
    pic_url = FileField('pic_url', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
