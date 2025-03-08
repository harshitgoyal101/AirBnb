import uuid
from django.db import models
from django.conf import settings
from User.models import User

class Constant(models.Model):
    TYPE_CHOICES = (
        ('Aminities', 'Aminities'),
        ('Categories', 'Categories'),
    )
    title = models.CharField(max_length=255)
    description = models.TextField()
    type = models.CharField(max_length=20, choices=TYPE_CHOICES)

    def __str__(self):
        return self.title
        
    class Meta:
        verbose_name = "Constant"
        verbose_name_plural = "Constants"

class Aminity(Constant):
    class Meta:
        proxy = True
        verbose_name = "Aminity"
        verbose_name_plural = "Aminities"

class Category(Constant):
    class Meta:
        proxy = True
        verbose_name = "Category"
        verbose_name_plural = "Categories"
        
class Property(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    description = models.TextField()
    price_per_night = models.IntegerField()
    bedrooms = models.IntegerField()
    bathrooms = models.IntegerField()
    guests = models.IntegerField()
    country = models.CharField(max_length=255)
    country_code = models.CharField(max_length=10)
    category = models.ForeignKey(
        Category, 
        limit_choices_to=models.Q(type='Categories'), 
        related_name='category', 
        null=True, on_delete=models.SET_NULL
    )
    aminities = models.ManyToManyField(Aminity, through='PropertyAminities', related_name='aminities')
    image = models.ImageField(upload_to='uploads/properties/1')
    image2 = models.ImageField(upload_to='uploads/properties/2', null=True, blank=True)
    image3 = models.ImageField(upload_to='uploads/properties/3', null=True, blank=True)
    image4 = models.ImageField(upload_to='uploads/properties/4', null=True, blank=True)
    landlord = models.ForeignKey(User, related_name='properties', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def image_url(self):
        return f'{settings.WEBSITE_URL}{self.image.url}'
    
class PropertyAminities(models.Model):
    property = models.ForeignKey(Property, on_delete=models.CASCADE)
    aminity = models.ForeignKey(Aminity, on_delete=models.CASCADE)