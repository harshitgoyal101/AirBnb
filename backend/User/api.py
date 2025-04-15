
from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .forms import UserForm
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


@api_view(['PUT'])
def edit_user(request):
    try:
        user = User.objects.get(id=request.user)
    except user.DoesNotExist:
        return JsonResponse({'error': 'user not found or unauthorized'}, status=404)
    
    form = UserForm(request.POST, request.FILES, instance=user)
    if form.is_valid():
        user = form.save()
        serializer = UserDetailSerializer(user)
        return JsonResponse({'data': serializer.data})
    else:
        return JsonResponse({"errors": form.errors.as_json()}, status=400, safe=False)
