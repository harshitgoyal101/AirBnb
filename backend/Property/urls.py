from django.urls import path
from . import api

urlpatterns = [
    path('', api.properties_list, name='api_properties_list'),
    path('create/', api.create_property, name='create_property'),
    path('<uuid:property_id>/', api.get_property_by_id, name='get_property_by_id'),
]
