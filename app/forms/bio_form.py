from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


class UploadBioForm(FlaskForm):
    bio = StringField('bio', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
