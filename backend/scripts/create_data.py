from Property.models import Constant

categories = [
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
    'National parks', 
    "Chef's kitchens", 
    'Casas particulares',
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
    'Lake', 
    "Shepherd's huts", 
    'Farms',
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

def run(*args):
    for category in categories:
        Constant.objects.create(title=category, type="Categories")