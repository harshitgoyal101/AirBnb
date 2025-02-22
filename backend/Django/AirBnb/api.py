from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from Property.models import Constant

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def categories_list(request):
    return JsonResponse({
        'data': [category.title for category in Constant.objects.filter(type='Categories')]
    })

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def aminities_list(request):
    return JsonResponse({
        'data': [
            "A frames", "Boats"
        ]
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
