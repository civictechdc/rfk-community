from django.shortcuts import render

def home(request):
    return render(request, 'index.html', {})


def hello(request):
    return render(request, 'hello-world.html', {})
