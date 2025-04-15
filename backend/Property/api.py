from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .models import Property, Reviews
from .serializers import *
from .forms import PropertyForm, ReviewForm

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def properties_list(request):
    properties = Property.objects.all()
    
    min_price = request.GET.get('min_price')
    max_price = request.GET.get('max_price')
    if min_price:
        properties = properties.filter(price_per_night__gte=min_price)
    if max_price:
        properties = properties.filter(price_per_night__lte=max_price)
    
    city = request.GET.get('city')
    if city:
        properties = properties.filter(city__iexact=city)
    
    category = request.GET.get('category')
    if category:
        properties = properties.filter(category__id=category)
    
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
    
@api_view(['PUT'])
def edit_property(request, property_id):
    try:
        property = Property.objects.get(id=property_id, landlord=request.user)
    except Property.DoesNotExist:
        return JsonResponse({'error': 'Property not found or unauthorized'}, status=404)
    
    form = PropertyForm(request.POST, request.FILES, instance=property)
    if form.is_valid():
        property = form.save()
        serializer = PropertiesListSerializers(property)
        return JsonResponse({'data': serializer.data})
    else:
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
    

@api_view(['GET'])
@authentication_classes([]) 
@permission_classes([])
def get_property_reviews(request, property_id):
    try:
        reviews = Reviews.objects.filter(property=property_id)
        serializer = ReviewSerializer(reviews, many=True)
        return JsonResponse({"data": serializer.data}, status=202)
    except Reviews.DoesNotExist:
        return JsonResponse({"error": "Reviews not found"}, status=404)
    

@api_view(['POST'])
def create_review(request):
    form = ReviewForm(request.POST)
    if form.is_valid():
        review = form.save(commit=False)
        review.user = request.user
        review.save()
        serializer = ReviewSerializer(review)
        return JsonResponse({
            'data': serializer.data
        })
    else:
        print('error', form.errors, form.non_field_errors)
        return JsonResponse({"errors": form.errors.as_json()}, status=400, safe=False)
    