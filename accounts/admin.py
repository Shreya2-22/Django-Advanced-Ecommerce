from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.utils.html import format_html
from .models import Account, UserProfile

@admin.register(Account)
class AccountAdmin(UserAdmin):
    list_display = (
        'email', 'first_name', 'last_name',
        'username', 'last_login', 'date_joined', 'is_active'
    )
    list_display_links = ('email', 'first_name', 'last_name')
    readonly_fields = ('last_login', 'date_joined')
    ordering = ('-date_joined',)
    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ('thumbnail', 'user', 'city', 'state', 'country')

    def thumbnail(self, obj):
        if obj.profile_picture:
            return format_html(
                '<img src="{}" width="30" style="border-radius:50%;">',
                obj.profile_picture.url
            )
        return ""
    thumbnail.short_description = 'Profile Picture'
