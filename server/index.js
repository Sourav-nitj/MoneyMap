require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
const transactionsRoutes = require("./routes/transactions");
const analyticsRoutes = require("./routes/analytics");
const budgetsRoutes = require("./routes/budgets");

app.use("/api/auth", authRoutes);
app.use("/api/transactions", transactionsRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/budgets", budgetsRoutes);

// Root Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Expense Tracker API is running 🚀",
    routes: [
      "GET /api/transactions",
      "POST /api/transactions",
      "DELETE /api/transactions/:id",
      "GET /api/analytics/category-totals",
      "GET /api/analytics/monthly-summary",
      "GET /api/budgets"
    ]
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

// Start Server
const PORT = process.env.PORT || 8787;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});