import express from "express";
import todoRoutes from "./routes/todo.routes.js";

const app = express();

app.use(express.json());

// Routes
app.use("/todos", todoRoutes);

// Global error handler (optional but good practice)
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: "Internal Server Error" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
