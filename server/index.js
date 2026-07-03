require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
const transactionsRoutes = require("./routes/transactions");
const analyticsRoutes = require("./routes/analytics");
const budgetsRoutes = require("./routes/budgets");

app.use("/api/auth", authRoutes);
app.post("/api/auth/register", (req, res) => {
  res.json({
    message: "DIRECT REGISTER ROUTE WORKS"
  });
});
app.use("/api/transactions", transactionsRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/budgets", budgetsRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Expense Tracker API is running 🚀",
  });
});

// 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

const PORT = process.env.PORT || 8787;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});