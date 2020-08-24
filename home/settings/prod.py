'''Use this for production'''

from .base import *

DEBUG = True
ALLOWED_HOSTS += ['0.0.0.0','localhost','cheart2020.herokuapp.com','127.0.0.1', 'localhost'] 


WSGI_APPLICATION = 'home.wsgi.prod.application'

#SECRET_KEY = os.environ.get('SECRET_KEY')
# EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER')
# EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD')


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'cheart',
        'USER': 'postgres',
        'PASSWORD': 'asdfghjklpoiuytrewq',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

db_from_env = dj_database_url.config(conn_max_age=600)
DATABASES['default'].update(db_from_env)
# 'HOST': 'ec2-34-236-215-156.compute-1.amazonaws.com',
        
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
#     }
# }


AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

# STATICFILES_STORAGE = 'whitenoise.django.GzipManifestStaticFilesStorage'
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

# CORS_ORIGIN_WHITELIST = (
#     'http://localhost:3000',
#     'http://127.0.0.1:8000',
#     'http://192.168.8.100:3000',
#)

CORS_ORIGIN_ALLOW_ALL = True 