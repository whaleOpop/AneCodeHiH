FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ARG DJANGO_SECRET_KEY
ARG DATABASE_URL
ARG DEBUG

ENV DJANGO_SECRET_KEY=$DJANGO_SECRET_KEY
ENV DATABASE_URL=$DATABASE_URL
ENV DEBUG=$DEBUG

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
