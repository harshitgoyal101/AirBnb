from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def categories_list(request):
    return JsonResponse({
        'data': []
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
