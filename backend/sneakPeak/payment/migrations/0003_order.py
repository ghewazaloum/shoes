# Generated by Django 5.0.1 on 2024-02-25 15:24

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('payment', '0002_alter_cart_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('shipping_address', models.TextField()),
                ('payment_status', models.BooleanField(default=False)),
                ('placed_at', models.DateTimeField(auto_now_add=True)),
                ('cart', models.OneToOneField(on_delete=django.db.models.deletion.PROTECT, to='payment.cart')),
            ],
        ),
    ]