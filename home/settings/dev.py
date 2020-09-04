'''Use this for development'''

from .base import *

ALLOWED_HOSTS += ['127.0.0.1','localhost']
DEBUG = True

WSGI_APPLICATION = 'home.wsgi.dev.application'

# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
#     }
# }

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'chemical',
        'USER': 'postgres',
        'PASSWORD': 'asdfghjklpoiuytrewq',
        'HOST': 'localhost',
        'PORT': '',
    }
}
CORS_ORIGIN_WHITELIST = (
    'https://localhost:3000',
)