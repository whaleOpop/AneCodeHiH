import requests
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response


EXTERNAL_API_URL = 'http://147.45.254.226:8889'

@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')

    payload = {
        'username': username,
        'password': password
    }

    try:
        response = requests.post(f"{EXTERNAL_API_URL}/auth/login", data=payload)

        if response.status_code == 200:
            # Форматируем ответ в соответствии с ожидаемым форматом
            formatted_response = {
                "access_token": response.json().get("access_token"),
                "token_type": response.json().get("token_type")
            }
            return JsonResponse(formatted_response, status=200)
        else:
            return JsonResponse({"error": "Invalid credentials or server error"}, status=response.status_code)

    except requests.exceptions.RequestException as e:
        return JsonResponse({"error": str(e)}, status=500)
