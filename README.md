https://colab.research.google.com/drive/1WUYpe390i8HWLIYjbTM0whIZrb_9HpKM?usp=sharing
![photo_2024-12-01_07-03-00](https://github.com/user-attachments/assets/14b64be6-219d-45f7-bdd7-e3ebe0573b89)
![photo_2024-12-01_07-02-57](https://github.com/user-attachments/assets/6a7539ae-ecc5-4c4a-94f0-18b3f21b17db)
Основная цель проекта — разработать модель семантической сегментации, способную точно разделять автомобильные изображения на классы (например, бампер, капот, двери и т. д.). Это полезно в таких областях, как автомобильная диагностика, оценка повреждений, автоматизированный контроль качества и автономное вождение.

### Особенности проекта

1. **Использование U-Net**:
   - Модель U-Net разработана специально для сегментации. Её архитектура сочетает этапы кодирования (уменьшение размерности) и декодирования (увеличение размерности), что позволяет эффективно обрабатывать изображения.
   
2. **Цветовые маски**:
   - Модель использует заранее заданные цвета (RGB) для идентификации различных частей автомобиля, преобразуя их в числовые классы.

3. **Аугментация данных**:
   - Включены функции предобработки данных, такие как изменение размера изображений и преобразование цветовых масок в числовые значения.

4. **Проверка модели на реальных данных**:
   - Включены функции визуализации, чтобы сравнивать предсказания модели с оригинальными изображениями и истинными масками.

5. **Поддержка Google Drive**:
   - Модель интегрирована с Google Colab для работы с большими наборами данных, что упрощает обучение.

---

### Плюсы проекта

1. **Простота архитектуры**:
   - U-Net эффективна для задач сегментации даже с ограниченным количеством данных.
   
2. **Гибкость в обработке данных**:
   - Предобработка данных поддерживает различные размеры и форматы изображений.

3. **Чёткая структура кода**:
   - Код разделён на модули для загрузки данных, обработки, обучения и визуализации, что облегчает повторное использование.

4. **Поддержка визуализации**:
   - Удобные функции для визуального анализа результатов помогают быстрее оценить качество работы модели.

5. **Хранение модели**:
   - Модель сохраняется в Google Drive, что упрощает её загрузку и последующее использование.

---

### Минусы проекта

1. **Ограниченный набор данных**:
   - Модель может быть переобучена или плохо работать на новых данных, если обучается на ограниченном или однообразном наборе изображений.

2. **Ресурсоёмкость**:
   - Обучение модели требует значительных вычислительных ресурсов, особенно для больших изображений или сложных архитектур.

3. **Узкая специализация**:
   - Модель настроена на сегментацию определённых классов автомобилей. Для расширения её применения потребуется дополнительное обучение.

4. **Проблемы с метриками**:
   - Проект ориентирован на точность, но такие показатели, как пересечение на объединение (IoU), не рассматриваются в текущем коде.

5. **Ручная настройка цветов**:
   - Жёстко заданные цвета масок могут ограничивать использование модели для других задач сегментации, требуя дополнительной адаптации.
