# Generated by Django 3.2.9 on 2022-03-27 01:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_workerattendance_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='workerattendance',
            name='department',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]