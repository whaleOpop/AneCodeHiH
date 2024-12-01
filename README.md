# Документация REST API FastAPI: Обзор

## Введение

**AneCode REST API** — это серверная часть, созданная с использованием FastAPI. Этот легковесный, асинхронный фреймворк обеспечивает высокую производительность, удобство разработки и встроенную поддержку документации API (Swagger и ReDoc). FastAPI идеально подходит для создания масштабируемых REST API, поддерживающих интеграцию с базой данных и авторизацию.

---

## Структура проекта

### 1. **`.github`**
- **workflows/build.yml**: Скрипт CI для автоматической проверки, сборки и деплоя приложения.

### 2. **Корневые файлы**
- **`.gitignore`**: Исключение файлов из системы контроля версий.
- **`docker-compose.yml`**: Конфигурация для оркестрации контейнеров с Docker.
- **`Dockerfile`**: Скрипт для создания Docker-образа.
- **`requirements.txt`**: Список зависимостей проекта.
- **`run.py`**: Скрипт запуска FastAPI приложения.

### 3. **`app/`**
Основной каталог приложения с модулями и бизнес-логикой:
- **`db/`**: Модуль работы с базой данных.
  - **`crud.py`**: CRUD-операции для взаимодействия с базой данных.
  - **`database.py`**: Настройки подключения к базе данных.
  - **`__init__.py`**: Указывает, что каталог является модулем Python.
- **`main.py`**: Точка входа в приложение FastAPI.
- **`models/`**: ORM-модели базы данных.
  - **`user.py`**: Модель пользователя.
  - **`__init__.py`**: Импорт модулей.
- **`routes/`**: Маршруты для API.
  - **`auth.py`**: Эндпоинты для аутентификации и авторизации.
  - **`user.py`**: Эндпоинты для операций с пользователями.
  - **`__init__.py`**: Импорт модулей.
- **`schemas.py`**: Pydantic-схемы для валидации данных.
- **`services/`**: Логика работы с бизнес-функциями.
  - **`auth.py`**: Сервисы для авторизации.
  - **`__init__.py`**: Импорт модулей.
- **`utilities/`**: Вспомогательные утилиты.
  - **`auth.py`**: Вспомогательные функции для авторизации.
  - **`__init__.py`**: Импорт модулей.
- **`__pycache__/`**: Временные файлы, создаваемые Python.

### 4. **`data/`**
Данные проекта:
- **`images/`**: Изображения.
- **`masks/`**: Маски, используемые в API.

### 5. **`models/`**
Вспомогательные данные для проекта.
- **`__pycache__/`**: Временные файлы Python.

### 6. **`utils/`**
Утилиты, необходимые для работы проекта.
- **`__pycache__/`**: Временные файлы.

---
Для тестов используйте эту запись (эти логин и пароль есть в базе): 
{
  "username": "myuser",
  "password": "mypassword"
}
---

## Ключевые функции REST API FastAPI

1. **Высокая производительность**:  
   - FastAPI использует асинхронную модель для обработки большого количества запросов.

2. **Удобство разработки**:  
   - Автоматическая генерация документации (Swagger UI и ReDoc).
   - Pydantic для строгой проверки и сериализации данных.

3. **Модульность**:  
   - Отдельные модули для маршрутов, моделей, бизнес-логики и утилит.

4. **Интеграция с базой данных**:  
   - Использование ORM (SQLAlchemy) для работы с данными.

5. **Docker-совместимость**:  
   - Удобная настройка и запуск в контейнерах.

---

## Настройка и запуск

1. **Установка зависимостей**:  
   ```
   pip install -r requirements.txt
   ```

2. **Запуск приложения**:  
   ```
   uvicorn app.main:app --reload
   ```

3. **Docker**:  
   Сборка и запуск через Docker:  
   ```
   docker-compose up --build
   ```

4. **Доступ к документации API**:  
   - Swagger UI: `http://localhost:8000/docs`
   - ReDoc: `http://localhost:8000/redoc`

---
