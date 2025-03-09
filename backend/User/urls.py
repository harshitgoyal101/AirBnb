from django.urls import path

from dj_rest_auth.registration.views import RegisterView
from dj_rest_auth.views import LoginView, LogoutView
from . import api

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('<uuid:user_id>/', api.get_user_by_id, name='get_user_by_id'),
    path('<uuid:user_id>/edit', api.edit_user, name='edit_user'),
]

