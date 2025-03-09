from django.urls import path
from . import api

urlpatterns = [
    path('', api.properties_list, name='api_properties_list'),
    path('create/', api.create_property, name='create_property'),
    path('<uuid:property_id>/', api.get_property_by_id, name='get_property_by_id'),
    path('<uuid:property_id>/edit', api.edit_property, name='edit_property'),
    path('review/', api.create_review, name='create_review'),
    path('<uuid:property_id>/reviews/', api.get_property_reviews, name='get_property_reviews'),
]
