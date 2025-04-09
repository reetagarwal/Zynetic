
---

# 📚 Bookstore Application – RESTful API

A backend system for managing users and books with secure authentication, advanced filtering, and clean RESTful API design using **Node.js**, **Express.js**, **MongoDB**, and **JWT**. Built with a modular architecture using controllers and services for scalability.

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

Create a `.env` file in the root directory with the following:

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

## 🔐 User Authentication Routes

### POST `/api/users/signup`

Registers a new user.

#### Request Body

```json
{
  "username": "user@example.com",
  "firstName": "John",
  "lastName": "Doe",
  "password": "password123"
}
```

---

### POST `/api/users/signin`

Logs in the user and returns a JWT token.

#### Request Body

```json
{
  "username": "user@example.com",
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

### PUT `/api/users`

Updates user details (Authenticated route).

#### Headers

`Authorization: Bearer <token>`

#### Request Body

```json
{
  "firstName": "Jane",
  "lastName": "Smith"
}
```

---

### GET `/api/users/bulk?filter=searchText`

Searches users by partial match in `firstName` or `lastName`.

---

## 📚 Book Routes (All protected by JWT)

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

Get all books with advanced filters.

#### Query Parameters

- `author=James Clear`
- `category=Self-help`
- `rating=4.5`
- `title=Atomic` (partial match)
- `sort=price|rating`
- `page=1`
- `limit=10`

---

### GET `/api/books/:id`

Get a single book by its ID.

---

### PUT `/api/books/:id`

Update an existing book.

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

Delete a book by ID.

#### Headers

`Authorization: Bearer <token>`

---

## 🚨 Error Handling

- `400` – Bad Request: Invalid data or schema violation
- `401` – Unauthorized: Missing or invalid token
- `404` – Not Found: Resource does not exist
- `500` – Internal Server Error: Something went wrong

---

## 💡 Assumptions & Enhancements

### ✅ Assumptions

- Only authenticated users can create, update, or delete books.
- Book uniqueness is determined by title + author.
- Passwords are securely hashed using bcrypt.
- MongoDB is the database with Mongoose for schema definition.

### 🔧 Enhancements Implemented

- ✅ JWT-based secure authentication
- ✅ User update & search functionality
- ✅ Pagination (`page`, `limit`)
- ✅ Sorting by `price` or `rating`
- ✅ Filtering by `author`, `category`, `rating`
- ✅ Search by partial `title`
- ✅ Clean modular structure: controllers, services, models, routes

---

## 📦 Project Structure

```
├── config/
│   └── db.js
├── controllers/
│   ├── bookController.js
│   └── userController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── Book.js
│   └── User.js
├── routes/
│   ├── book.js
│   └── user.js
├── services/
│   ├── bookService.js
│   └── userService.js
├── .env
├── app.js
├── server.js
├── package.json
└── README.md
```

---

## 🧪 Future Improvements

- [ ] Add Swagger/OpenAPI documentation
- [ ] Dockerize the application for container-based deployment
- [ ] Add unit & integration tests using Jest and Supertest
- [ ] Use Prisma or TypeORM for flexible schema modeling

---

