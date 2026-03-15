# Task Manager Backend API

This is the **Backend API** for the Task Manager application.

The API provides authentication and task management features using **Node.js, Express, TypeScript, Prisma, and PostgreSQL**.

---

# Features

* User registration
* User login (JWT authentication)
* Create task
* Update task
* Delete task
* Mark task as completed
* Get tasks for logged-in user

---

# Tech Stack

* Node.js
* Express.js
* TypeScript
* Prisma ORM
* PostgreSQL
* JWT Authentication
* Bcrypt

---

# Installation

Clone repository

```
git clone https://github.com/MHASBIANUR/task-manager-backend.git
cd task-manager-backend
```

Install dependencies

```
npm install
```

---

# Environment Variables

Create `.env`

```
DATABASE_URL="postgresql://postgres:password@localhost:5432/task_db"
JWT_SECRET="your_secret_key"
PORT=5000
```

Example file is provided in `.env.example`.

---

# Database Setup

Create PostgreSQL database

```
CREATE DATABASE task_db;
```

Run Prisma migration

```
npx prisma migrate dev
```

View database

```
npx prisma studio
```

---

# Run Server

Start development server

```
npm run dev
```

Server will run at

```
http://localhost:5000
```

---

# API Endpoints

## Register

POST

```
/users
```

Request body

```
{
 "name": "John Doe",
 "email": "john@gmail.com",
 "password": "123456"
}
```

---

## Login

POST

```
/users/login
```

Request body

```
{
 "email": "john@gmail.com",
 "password": "123456"
}
```

Response

```
{
 "message": "Login success",
 "token": "JWT_TOKEN",
 "user": {
   "id": 1,
   "name": "John Doe",
   "email": "john@gmail.com"
 }
}
```

---

## Get My Tasks

GET

```
/tasks/my-tasks
```

Headers

```
Authorization: Bearer TOKEN
```

---

## Create Task

POST

```
/tasks
```

Body

```
{
 "title": "Learn English"
}
```

---

## Update Task

PUT

```
/tasks/:id
```

Body

```
{
 "title": "Learn English",
 "completed": true
}
```

---

## Delete Task

DELETE

```
/tasks/:id
```

---

# Environment Example

`.env.example`

```
DATABASE_URL=
JWT_SECRET=
PORT=5000
```

---

# Author

Hasbi Anur
