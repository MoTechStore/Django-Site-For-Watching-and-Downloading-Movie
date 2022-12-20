from django.contrib import admin
from .models import Video

model_list = [Video]
admin.site.register(model_list)


