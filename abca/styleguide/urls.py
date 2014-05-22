from django.conf.urls import patterns, url
from styleguide import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index'),
    url(r'^typography/$', views.typography, name='typography'),
)