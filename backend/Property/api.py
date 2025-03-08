from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .models import Property
from .serializers import PropertiesListSerializers, PropertyDetailSerializer
from .forms import PropertyForm

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def properties_list(request):
    properties = Property.objects.all()
    serializer = PropertiesListSerializers(properties, many=True)

    return JsonResponse({
        'data': serializer.data
    })

@api_view(['POST'])
def create_property(request):
    form = PropertyForm(request.POST, request.FILES)
    if form.is_valid():
        property = form.save(commit=False)
        property.landlord = request.user
        property.save()
        serializer = PropertiesListSerializers(property)
        return JsonResponse({
            'data': serializer.data
        })
    else:
        print('error', form.errors, form.non_field_errors)
        return JsonResponse({"errors": form.errors.as_json()}, status=400, safe=False)
    

@api_view(['GET'])
@authentication_classes([]) 
@permission_classes([])
def get_property_by_id(request, property_id):
    try:
        property = Property.objects.get(id=property_id)
        serializer = PropertyDetailSerializer(property)
        return JsonResponse({"data": serializer.data}, status=202)
    except Property.DoesNotExist:
        return JsonResponse({"error": "Property not found"}, status=404)