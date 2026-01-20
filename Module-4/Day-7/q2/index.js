import express from "express";
import usersRoutes from "./routes/users.routes.js";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
