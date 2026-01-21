import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbPath = path.join(__dirname, "../db.json");

const readDB = () => {
  return JSON.parse(fs.readFileSync(dbPath, "utf-8"));
};

const writeDB = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

// Model functions
export const getAllTodos = () => {
  const db = readDB();
  return db.todos;
};

export const getTodoById = (id) => {
  const db = readDB();
  return db.todos.find(todo => todo.id === id);
};

export const createTodo = (title) => {
  const db = readDB();

  const newTodo = {
    id: Date.now(),
    title,
    completed: false
  };

  db.todos.push(newTodo);
  writeDB(db);

  return newTodo;
};

export const updateTodo = (id, data) => {
  const db = readDB();
  const index = db.todos.findIndex(todo => todo.id === id);

  if (index === -1) return null;

  db.todos[index] = { ...db.todos[index], ...data };
  writeDB(db);

  return db.todos[index];
};

export const deleteTodo = (id) => {
  const db = readDB();
  const initialLength = db.todos.length;

  db.todos = db.todos.filter(todo => todo.id !== id);

  if (db.todos.length === initialLength) return false;

  writeDB(db);
  return true;
};
