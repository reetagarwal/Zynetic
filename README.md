
---

# 📚 Bookstore Application – RESTful API

A backend system for managing users and books with secure authentication, advanced filtering, and clean RESTful API design using **Node.js** and **Express.js**.

---

## 🚀 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/bookstore-api.git
cd bookstore-api
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4. Start the Server
```bash
npm start
```
Server runs on `http://localhost:5000`

---

## 🔐 User Authentication

### POST `/api/auth/signup`
Registers a new user.

#### Request Body
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

---

### POST `/api/auth/login`
Logs in and returns a JWT token.

#### Request Body
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Response
```json
{
  "token": "your_jwt_token"
}
```

---

## 📚 Book API (Protected – Requires JWT)

### POST `/api/books`
Create a new book.

#### Headers
`Authorization: Bearer <token>`

#### Request Body
```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "category": "Self-help",
  "price": 500,
  "rating": 4.8,
  "publishedDate": "2018-10-16"
}
```

---

### GET `/api/books`
Get all books with optional filters.

#### Query Parameters
- `author=James Clear`
- `category=Self-help`
- `rating=4.5`
- `search=Atomic`
- `sort=price|rating`
- `page=1`
- `limit=10`

---

### GET `/api/books/:id`
Get a single book by ID.

---

### PUT `/api/books/:id`
Update book by ID.

#### Headers
`Authorization: Bearer <token>`

#### Request Body
```json
{
  "price": 450,
  "rating": 4.9
}
```

---

### DELETE `/api/books/:id`
Delete book by ID.

#### Headers
`Authorization: Bearer <token>`

---

## 🚨 Error Handling

- 400 Bad Request – Invalid input
- 401 Unauthorized – No or invalid token
- 404 Not Found – Resource not found
- 500 Internal Server Error – Unexpected errors

---

## 💡 Assumptions & Enhancements

### ✅ Assumptions
- Only authenticated users can manage books.
- Each book is unique by its title + author.
- Passwords are hashed using bcrypt.
- MongoDB is used with Mongoose for schema modeling.

### 🔧 Enhancements (Implemented)
- ✅ Pagination (`page`, `limit`)
- ✅ Sorting by `price` or `rating`
- ✅ Filtering by `author`, `category`, and `rating`
- ✅ Search by partial title match
- ✅ Clean modular structure (routes, controllers, services)
- ✅ JWT-based authentication

---

## 📦 Project Structure

```
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── bookController.js
├── middleware/
│   ├── auth.js
│   └── errorHandler.js
├── models/
│   ├── User.js
│   └── Book.js
├── routes/
│   ├── authRoutes.js
│   └── bookRoutes.js
├── utils/
│   └── validators.js
├── app.js
├── server.js
├── .env
└── README.md
```

---

## 🧪 Future Improvements (Bonus)

- [ ] Add Swagger/OpenAPI documentation
- [ ] Dockerize the application
- [ ] Add unit and integration tests using Jest & Supertest
- [ ] Use Prisma ORM for scalable schema modeling

---



