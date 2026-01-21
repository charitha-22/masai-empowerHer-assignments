import express from "express";
import {
  fetchTodos,
  fetchSingleTodo,
  addTodo,
  editTodo,
  removeTodo
} from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/", fetchTodos);
router.get("/:id", fetchSingleTodo);
router.post("/", addTodo);
router.put("/:id", editTodo);
router.delete("/:id", removeTodo);

export default router;
