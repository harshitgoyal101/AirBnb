from django.forms import ModelForm
from .models import Property, Reviews

class PropertyForm(ModelForm):
    class Meta:
        model = Property
        exclude = ['id', 'landlord', 'created_at', 'aminities']

class ReviewForm(ModelForm):
    class Meta:
        model = Reviews
        exclude = ['user', 'created_at']
