# Generated by Django 5.1.4 on 2025-03-09 09:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Property', '0003_reviews'),
    ]

    operations = [
        migrations.AddField(
            model_name='reviews',
            name='description',
            field=models.TextField(default='some'),
            preserve_default=False,
        ),
    ]
