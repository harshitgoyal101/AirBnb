from django.contrib import admin
from .models import Property, Aminity, Category, PropertyAminities

@admin.register(Property)
class PropertyAdmin(admin.ModelAdmin):
    list_display = ('title', 'id')


@admin.register(Aminity)
class AminityAdmin(admin.ModelAdmin):
    list_display = ('title', 'type')

    def get_queryset(self, request):
        return super().get_queryset(request).filter(type='Aminities')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('title', 'type')

    def get_queryset(self, request):
        return super().get_queryset(request).filter(type='Categories')

@admin.register(PropertyAminities)
class PropertyAminitiesAdmin(admin.ModelAdmin):
    list_display = ('property', 'aminity')