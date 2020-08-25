release: python manage.py migrate --run-syncdb
web: gunicorn home.wsgi.prod --log-file -