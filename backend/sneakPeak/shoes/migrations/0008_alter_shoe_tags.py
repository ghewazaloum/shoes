# Generated by Django 5.0.1 on 2024-01-18 09:35

import multiselectfield.db.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shoes', '0007_alter_shoe_tags'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shoe',
            name='tags',
            field=multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('men', 'Men'), ('women', 'Women'), ('kids', 'Kids'), ('featured', 'Featured'), ('best sales', 'Best sales'), ('sales', 'Sales')], max_length=10, null=True),
        ),
    ]
