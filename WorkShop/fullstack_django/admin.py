from django.contrib import admin
from .models import Items

# Register your models here.


class ItemsAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'content', 'price', 'date', 'done')
    list_display_links = ('title', 'content', 'price', 'date')
    search_fields = ('title', 'content', 'price', 'date')
    list_editable = ('done',)
    list_filter = ('done',)


admin.site.register(Items, ItemsAdmin)