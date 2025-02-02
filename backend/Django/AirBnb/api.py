from django.http import JsonResponse
from rest_framework.decorators import api_view, authentication_classes, permission_classes

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def categories_list(request):
    return JsonResponse({
        'data': [
            'Cycladic homes', 
            'Desert', 
            'Countryside', 
            'Design', 
            'Mansions', 
            'Historical homes', 
            'Creative spaces', 
            'Domes', 
            'Cabins', 
            'Beachfront', 
            'Golfing', 
            'Off-the-grid', 
            'Castles', 
            'Skiing', 
            'Luxe', 
            'Camping', 
            'Minsus', 
            'Top cities', 
            'National parks', "Chef's kitchens", 'Casas particulares', 
            'Amazing pools', 
            'Top of the world', 
            'Treehouses', 
            'Earth homes', 
            'Islands', 
            'Camper vans', 
            'Caves', 
            'Beach', 
            'Containers', 
            'Yurts', 
            'Icons', 
            'Lakefront', 
            'Vineyards', 
            'Windmills', 
            'Adapted', 
            'Hanoks', 
            'Ryokans', 
            'New', 
            'Lake', "Shepherd's huts", 'Farms', 
            'Houseboats', 
            'Tropical', 
            'Tiny homes', 
            'OMG!', 
            'A frames', 
            'Ski-in out', 
            'Trending', 
            'Arctic', 
            'Dammusi', 
            'Boats', 
            'Rooms', 
            'Grand pianos', 
            'Play', 
            'Riads', 
            'Surfing', 
            'Trulli', 
            'Bed & breakfasts', 
            'Barns', 
            'Towers'
        ]
    })

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def aminities_list(request):
    return JsonResponse({
        'data': {
            "A frames": ""
        }
    })