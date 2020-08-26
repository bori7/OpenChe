'''Use this for production'''

from .base import *


DEBUG = True
ALLOWED_HOSTS += ['openche2020.herokuapp.com'] 


WSGI_APPLICATION = 'home.wsgi.prod.application'

django_heroku.settings(locals())
SECRET_KEY = os.environ.get('SECRET_KEY','-05sgp9!deq=q1nltm@^^2cc+v29i(tyybv3v2t77qi66czazj')
EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD')


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'd9varpu2c7df3s',
        'USER': 'ufvdkzsenjmwzq',
        'PASSWORD': '92b1bcacd94a5cbf9c036a210173cf2ecb8bd6223d4b1a6e96f5bebb1c6d9fa6',
        'HOST': 'ec2-52-22-94-132.compute-1.amazonaws.com',
        'PORT': '5432',
    }
}

db_from_env = dj_database_url.config(conn_max_age=600)

DATABASES['default'].update(db_from_env)




AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# STATICFILES_STORAGE = 'whitenoise.django.GzipManifestStaticFilesStorage'
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'


CORS_ALLOW_CREDENTIALS = True


CORS_ORIGIN_ALLOW_ALL = True 

# # This should already be in your settings.py

# # This is new
# options = DATABASES['default'].get('OPTIONS', {})
# options.pop('sslmode', None)


