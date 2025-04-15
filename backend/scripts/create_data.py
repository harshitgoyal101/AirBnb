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

aminities = [
    {
        "title": "Carbon monoxide alarm",
        "description": "There is carbon monoxide detector on the property."
    }, {
        "title": "Smoke alarm",
        "description": "There is smoke alarm on the property."
    }, {
        "title": "Bed linen",
        "description": "Egyptian cotton linen"
    }, {
        "title": "Dishes and cutlery",
        "description": "Bowls, chopsticks, plates, cups, etc."
    }, {
        "title": "Barbecue utensils",
        "description": "Grill, charcoal, bamboo skewers/iron skewers, etc."
    }, {
        "title": "Long-term stays allowed",
        "description": "Allow stays of 28 days or more"
    }, {
        "title": "Building staff",
        "description": "Someone is available 24 hours a day to let guests in"
    }
]

for category in categories:
    Constant.objects.create(title=category, type="Categories")
for aminity in aminities:
    Constant.objects.create(title=aminity['title'], description=aminity['description'], type="Aminities")

