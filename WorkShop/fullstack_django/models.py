from django.db import models


class Items(models.Model):
    title = models.CharField(max_length=100,verbose_name='Товар')
    content = models.TextField(max_length=500,null=True,blank=True, verbose_name='Описание')
    price = models.FloatField(max_length=100,null=True, blank=True,verbose_name='Цена')
    date = models.DateField(auto_now_add=True)
    done = models.BooleanField(default=False)

    def __str__(self):
        return self.title

