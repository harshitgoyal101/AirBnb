import os
import django
import random
import string
import requests
from io import BytesIO
from django.core.files.base import ContentFile


from User.models import User

def generate_random_name():
    """Generate a random name for a user"""
    first_names = ["John", "Jane", "Michael", "Emily", "David", "Sarah", "Robert", "Lisa", "William", "Emma", 
                  "James", "Olivia", "Thomas", "Ava", "Daniel", "Sophia", "Joseph", "Isabella", "Charles", "Mia"]
    last_names = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
                 "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin"]
    
    return f"{random.choice(first_names)} {random.choice(last_names)}"

def generate_random_email(name):
    """Generate a random email based on the user's name"""
    domains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com"]
    name_parts = name.lower().split()
    username = f"{name_parts[0]}{random.randint(1, 999)}"
    return f"{username}@{random.choice(domains)}"

def get_random_profile_pic():
    """Get a random profile picture from a placeholder service"""
    # Using UI Faces API for random avatars
    gender = random.choice(["men", "women"])
    id = random.randint(1, 70)
    return f"https://randomuser.me/api/portraits/{gender}/{id}.jpg"

def create_random_users(num_users=10):
    """Create a specified number of random users with profile pictures"""
    print(f"Creating {num_users} random users...")
    
    for i in range(num_users):
        # Generate random user data
        name = generate_random_name()
        email = generate_random_email(name)
        
        # Check if user with this email already exists
        if User.objects.filter(email=email).exists():
            print(f"User with email {email} already exists, skipping...")
            continue
        
        # Create password (random string of 10 characters)
        password = ''.join(random.choices(string.ascii_letters + string.digits, k=10))
        
        # Get profile picture URL
        profile_pic_url = get_random_profile_pic()
        
        try:
            # Download the profile picture
            response = requests.get(profile_pic_url)
            if response.status_code == 200:
                # Create user with profile picture
                user = User.objects.create_user(
                    name=name,
                    email=email,
                    password=password
                )
                
                # Save profile picture
                profile_pic_content = ContentFile(response.content)
                user.profile_pic.save(f"profile_{user.id}.jpg", profile_pic_content, save=True)
                
                print(f"Created user: {name} ({email})")
                print(f"  - Password: {password}")
                print(f"  - Profile picture: {profile_pic_url}")
            else:
                print(f"Failed to download profile picture for {name}, skipping user creation")
        except Exception as e:
            print(f"Error creating user {name}: {str(e)}")
    
    print(f"Finished creating random users!")

if __name__ == '__main__':
    create_random_users(10) 