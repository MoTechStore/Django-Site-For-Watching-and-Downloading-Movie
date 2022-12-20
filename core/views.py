from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from . models import Video
from django.core import serializers


def index(request):
    return render(request,'core/index.html')


def liveSearch(request):
    text = request.GET.get('searchText')
    movie_list = Video.objects.filter(title__icontains=text)
    result = serializers.serialize('json', list(movie_list))
    return JsonResponse({'results':result})


def download(request,pk):
    video_detail = Video.objects.get(pk=pk)
    context = {'video':video_detail}
    return render(request, 'core/download.html', context)

