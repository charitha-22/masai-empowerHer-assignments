const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const dbPath = path.join(__dirname, "../db.json");

const readDB = () => {
  return JSON.parse(fs.readFileSync(dbPath, "utf-8"));
};

const writeDB = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

/* ================= TODO ROUTES ================= */

// CREATE TODO
router.post("/add", (req, res) => {
  const db = readDB();
  const newTodo = {
    id: Date.now(),
    ...req.body
  };

  db.todos.push(newTodo);
  writeDB(db);

  res.status(201).json(newTodo);
});

// GET ALL TODOS
router.get("/", (req, res) => {
  const db = readDB();
  res.status(200).json(db.todos);
});

// GET SINGLE TODO
router.get("/:todoId", (req, res) => {
  const db = readDB();
  const todoId = Number(req.params.todoId);

  const todo = db.todos.find(t => t.id === todoId);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.status(200).json(todo);
});

// UPDATE TODO
router.put("/update/:todoId", (req, res) => {
  const db = readDB();
  const todoId = Number(req.params.todoId);

  const todoIndex = db.todos.findIndex(t => t.id === todoId);

  if (todoIndex === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  db.todos[todoIndex] = {
    ...db.todos[todoIndex],
    ...req.body
  };

  writeDB(db);
  res.status(200).json(db.todos[todoIndex]);
});

// DELETE TODO
router.delete("/delete/:todoId", (req, res) => {
  const db = readDB();
  const todoId = Number(req.params.todoId);

  const filteredTodos = db.todos.filter(t => t.id !== todoId);

  if (filteredTodos.length === db.todos.length) {
    return res.status(404).json({ message: "Todo not found" });
  }

  db.todos = filteredTodos;
  writeDB(db);

  res.status(200).json({ message: "Todo deleted successfully" });
});

module.exports = router;
