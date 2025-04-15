import os
import uuid
import json
import random
import requests
from django.core.files import File
from django.conf import settings
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry
from Property.models import Property, Category
from User.models import User


def ensure_directory_exists(path):
    """Create directory if it doesn't exist"""
    os.makedirs(os.path.dirname(path), exist_ok=True)


def download_image(image_url, save_path="", file_name="default", use_proxy=False):
    full_path = os.path.join(save_path, file_name)
    # Ensure the directory exists
    ensure_directory_exists(full_path)
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }
    try:
        response = requests.get(image_url, headers=headers, stream=True)
        response.raise_for_status()  # Raise an exception for bad status codes
        
        if response.status_code == 200:
            with open(full_path, "wb") as file:
                for chunk in response.iter_content(1024):
                    file.write(chunk)
            print(f"{file_name} - Image downloaded successfully!")
            return full_path
        else:
            print("Failed to download image. Status code:", response.status_code)
            return None
    except Exception as e:
        print(f"Error downloading image: {str(e)}")
        return None


with open('airbnb_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)


users = list(User.objects.all())
if not users:
    raise Exception("No users found! Please create at least one user.")


DEFAULT_COUNTRY = "India"
DEFAULT_COUNTRY_CODE = "IN"
category = Category.objects.filter(type="Categories").first()
properties_to_create = []
print("\n🏡 Importing properties...\n")


for city, properties in data.items():
    print(f"📍 City: {city}")
    for item in properties:
        property_obj = Property(
            id=uuid.uuid4(),
            title=item.get("title", "No Title"),
            description=item.get("description", "No description available."),
            price_per_night=item.get("price_per_night", 0),
            bedrooms=item.get("Bedrooms", 1),
            bathrooms=item.get("Bathrooms", 1),
            guests=item.get("Guests", 1),
            country=DEFAULT_COUNTRY,
            country_code=DEFAULT_COUNTRY_CODE,
            category=category,
            landlord=random.choice(users),
        )
        properties_to_create.append(property_obj)


print("🚀 Bulk inserting properties...")
Property.objects.bulk_create(properties_to_create)
all_properties = {prop.title: prop for prop in Property.objects.all()}
image_fields = ["image", "image2", "image3", "image4", "image5"]


for city, properties in data.items():
    for item in properties:
        property_obj = all_properties.get(item.get("title"))
        if not property_obj:
            continue
        
        # Create base media directory using Django's MEDIA_ROOT setting
        base_media_dir = os.path.join(settings.MEDIA_ROOT, 'uploads', 'properties')
        
        for idx, image_url in enumerate(item.get("image", [])[:5]):
            if not image_url:
                continue
            try:
                # Create proper directory structure
                image_dir = os.path.join(base_media_dir, str(idx + 1))
                os.makedirs(image_dir, exist_ok=True)
                
                image_filename = f"{property_obj.id}.jpg"
                image_path = download_image(
                    image_url,
                    save_path=image_dir,
                    file_name=image_filename,
                    use_proxy=False
                )
                
                if image_path and os.path.exists(image_path):
                    with open(image_path, 'rb') as img_file:
                        getattr(property_obj, image_fields[idx]).save(image_filename, File(img_file))
                    print(f"✅ Successfully saved image {idx + 1} for property {property_obj.title}")
                property_obj.save()
            except Exception as e:
                import traceback
                print(f"⚠️ Failed to save image {image_url} for property {property_obj.title}")
                print(traceback.format_exc())

print("\n🎉 Import completed successfully!")


# image_fields = ["image", "image2", "image3", "image4", "image5"]


# for idx in range(len(image_fields)):
#     for property_obj in properties:
#         image_path = f"backend/media/uploads/properties/{idx+1}/{property_obj.id}.jpg"
#         if image_path:
#             with open(image_path, 'rb') as img_file:
#                 getattr(property_obj, image_fields[idx]).save(os.path.basename(image_path), File(img_file))
#         property_obj.save()
#         break