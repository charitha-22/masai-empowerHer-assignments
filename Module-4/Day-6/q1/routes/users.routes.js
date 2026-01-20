const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const dbPath = path.join(__dirname, "../db.json");

// Helper function to read DB
const readDB = () => {
  return JSON.parse(fs.readFileSync(dbPath, "utf-8"));
};

// Helper function to write DB
const writeDB = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
};

/* ================= USER ROUTES ================= */

// CREATE USER
router.post("/add", (req, res) => {
  const db = readDB();
  const newUser = {
    id: Date.now(),
    ...req.body
  };

  db.users.push(newUser);
  writeDB(db);

  res.status(201).json(newUser);
});

// GET ALL USERS
router.get("/", (req, res) => {
  const db = readDB();
  res.status(200).json(db.users);
});

// GET SINGLE USER
router.get("/:userId", (req, res) => {
  const db = readDB();
  const userId = Number(req.params.userId);

  const user = db.users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

// UPDATE USER
router.put("/update/:userId", (req, res) => {
  const db = readDB();
  const userId = Number(req.params.userId);

  const userIndex = db.users.findIndex(u => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  db.users[userIndex] = {
    ...db.users[userIndex],
    ...req.body
  };

  writeDB(db);
  res.status(200).json(db.users[userIndex]);
});

// DELETE USER
router.delete("/delete/:userId", (req, res) => {
  const db = readDB();
  const userId = Number(req.params.userId);

  const filteredUsers = db.users.filter(u => u.id !== userId);

  if (filteredUsers.length === db.users.length) {
    return res.status(404).json({ message: "User not found" });
  }

  db.users = filteredUsers;
  writeDB(db);

  res.status(200).json({ message: "User deleted successfully" });
});

module.exports = router;
