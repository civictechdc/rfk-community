from django.contrib import admin

# Register your models here.
from .models import User


class UserAdmin(admin.ModelAdmin):
    fields = ['first_name', 'last_name']

admin.site.register(User, UserAdmin) 