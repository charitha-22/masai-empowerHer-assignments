const express = require("express");
const usersRoutes = require("./routes/users.routes")
const todosRoutes = require("./routes/todo.routes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/users", usersRoutes);
app.use("/todos", todosRoutes);

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});