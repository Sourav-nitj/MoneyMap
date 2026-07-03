require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
const authRoutes = require("./routes/auth");
const transactionsRoutes = require("./routes/transactions");
const analyticsRoutes = require("./routes/analytics");
const budgetsRoutes = require("./routes/budgets");

app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionsRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/budgets", budgetsRoutes);

// ROOT TEST ROUTE
app.get("/", (req, res) => {
  res.json({
    message: "Expense Tracker API is running 🚀",
    routes: [
      "GET /api/transactions",
      "POST /api/transactions",
      "DELETE /api/transactions/:id",
      "GET /api/analytics/category-totals",
      "GET /api/analytics/monthly-summary"
    ]
  });
});

const PORT = process.env.PORT || 8787;

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running on http://127.0.0.1:${PORT}`);
});
