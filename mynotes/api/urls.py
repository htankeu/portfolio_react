from django.urls import path
from . import views

urlpatterns = [
    path('',views.getRoutes, name="routes"),
    path('notes/',views.getNotes,name="notes"),
    path('notes/<str:pr_key>/update/',views.updateNote,name="update-note"),
    path('notes/<str:pr_key>/delete/',views.deleteNote,name="delete-note"),
    path('notes/<str:pr_key>',views.getNote,name="note"),

]