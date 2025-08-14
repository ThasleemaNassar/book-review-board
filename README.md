# 📚 Book Review Board

A full-stack MERN application where users can post books they’ve read, and others can leave short reviews with star ratings.

---

## 🚀 Features
- **User Authentication** with JWT (Register/Login)
- **Book Management** (Add, View, List)
- **Reviews** with star ratings (1–5)
- Input validation on both client and server
- Protected routes using JWT middleware
- MongoDB & Mongoose for database

---

## 🛠 Tech Stack
**Frontend:** React.js, Axios, React Router, react-icons  
**Backend:** Node.js, Express.js, Mongoose, express-validator  
**Database:** MongoDB (Atlas)  

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ThasleemaNassar/book-review-board.git
cd book-review-board

### 2️⃣ Backend Setup

cd backend
npm init -y
npm install mongoose dotenv express
npm i jwtwebtoken
npm install multer

###  Run the Backend Server
node index.js

### 3️⃣ Frontend Setup
cd ../frontend
npm install
npm install axios
npm install react-router-dom
npm install tailwindcss
npm install react-icons

### Run the frontend
npm run dev

###4️⃣ Access the App
Frontend: http://localhost:5173
Backend API: http://localhost:4000


📄 Sample .env (Backend)

DATABASE = mongodb+srv://thasleemanassar123:bookreviewboard@cluster0.maelrxl.mongodb.net/bookreview?retryWrites=true&w=majority&appName=Cluster0

JWTSECRETKEY = secretkey


*🔌API Routes
---------------


1) Auth

| Method | Endpoint        | Description           | Auth Required |
| ------ | --------------- | --------------------- | ------------- |
| POST   | `/api/register` | Register a new user   | ❌            |
| POST   | `/api/login`    | Login & get JWT token | ❌             |


2) Book

| Method | Endpoint         | Description                    | Auth Required |
| ------ | ---------------- | ------------------------------ | ------------- |
| POST   | `/api/books`     | Add a new book                 | ✅            |
| GET    | `/api/books`     | List all books (newest first)  | ✅            |
| GET    | `/api/books/:id` | Get details + reviews for book | ✅            |

3) Reviews

| Method | Endpoint                 | Description                 | Auth Required |
| ------ | ------------------------ | --------------------------- | ------------- |
| POST   | `/api/books/:id/reviews` | Add review (rating/comment) | ✅            |


* 🖼 Screenshots
-----------------

### Home Page
('\screenshots\Homepage-1.png','\screenshots\Homepage-2.png','\screenshots\Homepage-3.png')
### Login Page
('\screenshots\Loginpage.png')
### Register Page
('\screenshots\Registerpage.png')
### AllBooks page
('\screenshots\Allbookspage.png','\screenshots\Allbooks.png')
### AddBook Form
('\screenshots\Addbook.png')
### ViewBook Page
('\screenshots\Viewbookpage.png')
### Rate&review Form
('\screenshots\Rate&review.png')
### Careers Page
('\screenshots\Careers-1page.png','\screenshots\Careers-2.png')
### Contact Page
('\screenshots\Contactpagepage.png')

