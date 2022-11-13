Запросы API

Вход - POST localhost:8080/login

Пример JSON данные:

```json
{
    "email": "jonathan@email.com",
    "password": "jojo"
}
```
Ответ JSON:
```json
{
    "message": "User Sign In successfully",
    "session Id": 1
}
```

Выход - GET localhost:8080/logout

Ответ JSON:
```json
{
    "message": "Log out successfully"
}
```
Создание нового пользователя и автоматический вход: POST localhost:8080/users/create

Данные JSON:
```json
{
  "nickname": "Josuke",
  "fullName": "Higashikata Josuke",
  "email": "josuke@email.com",
  "password": "josuke"
}
```
Ответ JSON:
```json
{
    "message": "User created successfully"
}
```
Если емэйл уже занят то новый пользователь не будет создан и вы получите сл.ответ:
```json
{
    "message": "Email already in use"
}
```

Защищенные запросы (можно перейти только если авторизирован):

Получение пользователя GET localhost:8080/protected/users/self

Ответ JSON:
```json
{
    "ID": 1,
    "CreatedAt": "2022-11-12T12:18:31.766+05:00",
    "UpdatedAt": "2022-11-12T13:43:16.454+05:00",
    "DeletedAt": null,
    "Nickname": "Jonathan",
    "Email": "jonathan@email.com",
    "Password": "jonathan",
    "Verified": "2022-11-12T12:18:31.766+05:00"
}
```

Изменение пользователя PUT localhost:8080/protected/users/self

Данные JSON:
```json
{
    "password": "jojo",
    "nickname": "Fullmaster"
  // "email": "smth",
  // "verified": "0001-11-30T04:02:33+04:02"
}
```
Ответ JSON:
```json
{
    "ID": 6,
    "CreatedAt": "2022-11-12T14:05:32.677+05:00",
    "UpdatedAt": "2022-11-12T14:23:16.835+05:00",
    "DeletedAt": null,
    "Nickname": "Fullmaster",
    "Email": "josuke@email.com",
    "Password": "jojo",
    "Verified": "0001-11-30T04:02:33+04:02"
}
```

Удаление пользователя и автоматический выход DELETE localhost:8080/protected/users/self

Ответ JSON:
```json
{
    "message": "User deleted and log out successfully"
}
```

Подключение нетмонет GET localhost:8080/protected/netmonet/connect

Ответ JSON:
```json
{
    "link": "https://netmonet.co/tip/{code}",
    "message": "Your link https://netmonet.co/tip/{code}"
}
```