
from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .models import User
from .serializers import UserDetailSerializer


@api_view(['GET'])
@authentication_classes([]) 
@permission_classes([])
def get_user_by_id(request, user_id):
    try:
        user = User.objects.get(id=user_id)
        serializer = UserDetailSerializer(user)
        return JsonResponse({"data": serializer.data}, status=202)
    except User.DoesNotExist:
        return JsonResponse({"error": "User not found"}, status=404)