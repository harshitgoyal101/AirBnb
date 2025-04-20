from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from Property.models import Constant

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def categories_list(request):
    categories = Constant.objects.filter(type='Categories')
    return JsonResponse({
        'data': [{'id': category.id, 'title': category.title} for category in categories]
    })

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def aminities_list(request):
    aminities = Constant.objects.filter(type='Aminities')
    return JsonResponse({
        'data': [{'id': aminity.id, 'title': aminity.title} for aminity in aminities]
    })

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def all_aminities_list(request):
    return JsonResponse({
        'data': {
            "A frames": "",
            "Boats": "Nishi",
            "Riads": "harsutr"
        }
    })
