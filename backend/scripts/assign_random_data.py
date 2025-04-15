import os
import django
import random
from decimal import Decimal
from Property.models import Property, Category, Aminity, PropertyAminities

def generate_property_details(property_title):
    """Generate random property details based on the property title"""
    # Extract keywords from title
    title_lower = property_title.lower()
    
    # Determine property type based on title keywords
    property_type = "Default"
    if any(keyword in title_lower for keyword in ["luxury", "villa", "mansion", "palace"]):
        property_type = "Luxury"
    elif any(keyword in title_lower for keyword in ["beach", "ocean", "sea", "coastal"]):
        property_type = "Beach"
    elif any(keyword in title_lower for keyword in ["mountain", "ski", "hiking", "trail"]):
        property_type = "Mountain"
    elif any(keyword in title_lower for keyword in ["city", "downtown", "urban", "apartment"]):
        property_type = "City"
    elif any(keyword in title_lower for keyword in ["country", "farm", "rural", "cottage"]):
        property_type = "Countryside"
    
    # Generate details based on property type
    if property_type == "Luxury":
        bedrooms = random.randint(4, 8)
        bathrooms = random.randint(3, 6)
        guests = random.randint(8, 16)
        description = f"Experience unparalleled luxury in this stunning {bedrooms}-bedroom, {bathrooms}-bathroom property. " \
                     f"Perfect for up to {guests} guests, this magnificent residence offers breathtaking views, " \
                     f"high-end finishes, and world-class amenities. Enjoy the perfect blend of comfort and elegance."
    elif property_type == "Beach":
        bedrooms = random.randint(2, 5)
        bathrooms = random.randint(1, 3)
        guests = random.randint(4, 10)
        description = f"Discover paradise in this beautiful {bedrooms}-bedroom, {bathrooms}-bathroom beachfront property. " \
                     f"Accommodating up to {guests} guests, this coastal retreat offers stunning ocean views, " \
                     f"direct beach access, and the perfect setting for your seaside vacation."
    elif property_type == "Mountain":
        bedrooms = random.randint(2, 4)
        bathrooms = random.randint(1, 3)
        guests = random.randint(4, 8)
        description = f"Escape to this cozy {bedrooms}-bedroom, {bathrooms}-bathroom mountain retreat. " \
                     f"Perfect for up to {guests} guests, this property offers spectacular mountain views, " \
                     f"peaceful surroundings, and a perfect base for outdoor adventures."
    elif property_type == "City":
        bedrooms = random.randint(1, 3)
        bathrooms = random.randint(1, 2)
        guests = random.randint(2, 6)
        description = f"Stay in the heart of the city in this stylish {bedrooms}-bedroom, {bathrooms}-bathroom property. " \
                     f"Ideal for up to {guests} guests, this urban oasis offers convenient access to attractions, " \
                     f"restaurants, and entertainment, with modern amenities for a comfortable stay."
    elif property_type == "Countryside":
        bedrooms = random.randint(2, 4)
        bathrooms = random.randint(1, 3)
        guests = random.randint(4, 8)
        description = f"Experience tranquility in this charming {bedrooms}-bedroom, {bathrooms}-bathroom countryside property. " \
                     f"Accommodating up to {guests} guests, this peaceful retreat offers beautiful views, " \
                     f"spacious grounds, and a perfect escape from the hustle and bustle."
    else:  # Default
        bedrooms = random.randint(1, 3)
        bathrooms = random.randint(1, 2)
        guests = random.randint(2, 6)
        description = f"Comfortable {bedrooms}-bedroom, {bathrooms}-bathroom property suitable for up to {guests} guests. " \
                     f"This welcoming space provides all the essentials for a pleasant stay, " \
                     f"with a convenient location and cozy atmosphere."
    
    return {
        "bedrooms": bedrooms,
        "bathrooms": bathrooms,
        "guests": guests,
        "description": description,
        "property_type": property_type
    }

def assign_random_data():
    properties = Property.objects.all()
    
    categories = Category.objects.all()
    amenities = Aminity.objects.all()
    
    price_ranges = {
        'Luxury': (500, 2000),
        'Beach': (300, 1500),
        'Mountain': (200, 1200),
        'City': (150, 1000),
        'Countryside': (100, 800),
        'Default': (50, 500)
    }
    
    print(f"Found {properties.count()} properties to update")
    print(f"Available categories: {categories.count()}")
    print(f"Available amenities: {amenities.count()}")
    
    for property in properties:
        # Generate property details based on title
        details = generate_property_details(property.title)
        
        # Update property with generated details
        property.description = details["description"]
        property.bedrooms = details["bedrooms"]
        property.bathrooms = details["bathrooms"]
        property.guests = details["guests"]
        property.save()
        
        # Assign random category
        if categories.exists():
            property.category = random.choice(categories)
            property.save()
        
        # Assign random price based on category
        category_name = property.category.title if property.category else 'Default'
        min_price, max_price = price_ranges.get(category_name, price_ranges['Default'])
        property.price_per_night = random.randint(min_price, max_price)
        property.save()
        
        # Assign random amenities (3-7 amenities per property)
        num_amenities = random.randint(3, 7)
        selected_amenities = random.sample(list(amenities), min(num_amenities, amenities.count()))
        
        # Clear existing amenities
        PropertyAminities.objects.filter(property=property).delete()
        
        # Add new amenities
        for amenity in selected_amenities:
            PropertyAminities.objects.create(property=property, aminity=amenity)
        
        print(f"Updated property: {property.title}")
        print(f"  - Category: {property.category.title if property.category else 'None'}")
        print(f"  - Price: ${property.price_per_night}")
        print(f"  - Bedrooms: {property.bedrooms}")
        print(f"  - Bathrooms: {property.bathrooms}")
        print(f"  - Guests: {property.guests}")
        print(f"  - Amenities: {len(selected_amenities)}")

if __name__ == '__main__':
    print("Starting random data assignment...")
    assign_random_data()
    print("Finished assigning random data to properties!")