import {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
} from "../models/todo.model.js";

// GET /todos
export const fetchTodos = (req, res) => {
  try {
    const todos = getAllTodos();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /todos/:id
export const fetchSingleTodo = (req, res) => {
  try {
    const id = Number(req.params.id);
    const todo = getTodoById(id);

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST /todos
export const addTodo = (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const todo = createTodo(title);
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT /todos/:id
export const editTodo = (req, res) => {
  try {
    const id = Number(req.params.id);
    const updatedTodo = updateTodo(id, req.body);

    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE /todos/:id
export const removeTodo = (req, res) => {
  try {
    const id = Number(req.params.id);
    const deleted = deleteTodo(id);

    if (!deleted) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
