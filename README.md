# MoneyMap 🗺️💰  
### Personal Expense Tracking & Analytics Platform

MoneyMap is a full-stack web application designed to help users track expenses, analyze spending habits, and gain clear financial insights through category-wise and monthly analytics.

The project follows a clean client–server architecture and uses modern web technologies for scalability, security, and developer productivity.

---

##  Features

### Authentication & Security
- User registration and login
- Secure password hashing using bcrypt
- JWT-based authentication
- Protected API routes
- Forgot password flow (email-ready)

### Expense Management
- Add, view, and delete expenses
- Categorized expense tracking
- Date-based expense records
- User-specific data isolation

### Analytics & Insights
- Category-wise expense totals
- Monthly spending summaries
- Analytics APIs for easy visualization

### Developer Experience
- RESTful API architecture
- Prisma ORM for database management
- Hot reloading with Nodemon & Vite
- Clean and modular code structure

---

## Tech Stack

### Frontend
- **React**
- **Vite**
- **Axios**
- **CSS**

### Backend
- **Node.js**
- **Express.js**
- **Prisma ORM**
- **SQLite** (local development)
- **JWT**
- **bcrypt**

---

## 📁 Project Structure

```text
MoneyMap/
├── client/                 # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── api.js           # Axios configuration
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── vite.config.js
│
├── server/                 # Backend (Express + Prisma)
│   ├── routes/             # API routes
│   ├── services/           # Email & helper services
│   ├── prisma/             # Prisma schema & migrations
│   ├── index.js            # Server entry point
│   └── dev.db              # SQLite database
│
└── README.md
