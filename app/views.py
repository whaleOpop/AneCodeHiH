from django.http import HttpResponse

def index(request):
    return HttpResponse("<h4>AneCode</h4>")
