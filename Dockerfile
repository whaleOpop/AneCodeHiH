FROM python:3.10-slim


WORKDIR /app

COPY requirements.txt .
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

COPY . .

ARG DJANGO_SECRET_KEY
ARG DATABASE_URL
ARG DEBUG

ENV DJANGO_SECRET_KEY=$DJANGO_SECRET_KEY \
    DATABASE_URL=$DATABASE_URL \
    DEBUG=$DEBUG

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
