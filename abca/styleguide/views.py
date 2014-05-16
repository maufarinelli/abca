from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, HttpResponseRedirect, Http404
from django.template import RequestContext, loader

def index(request):
    menu_list = ''
    context = RequestContext(request, {
        'menu_list': menu_list
    })
    return render(request, 'styleguide/index.html', context)

