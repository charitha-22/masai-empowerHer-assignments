import {
  createUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
  deleteUserService
} from "../services/user.service.js";

export const createUser = async (req, res) => {
  try {
    const user = await createUserService(req.body);
    res.status(201).json({ message: "User created", user });
  } catch (err) {
    console.log("ERROR TYPE 👉", typeof err);
  console.log("ERROR OBJECT 👉", err);
  console.log("ERROR STRING 👉", JSON.stringify(err, null, 2));
    res.status(err.status || 500).json({ error: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersService();
    res.status(200).json(users);
  } catch (err) {
     console.error("FULL ERROR OBJECT 👉", err);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await getUserByIdService(req.params.id);
    res.status(200).json(user);
  } catch (err) {
     console.error("FULL ERROR OBJECT 👉", err);
    res.status(err.status || 500).json({ error: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const user = await updateUserService(req.params.id, req.body);
    res.status(200).json(user);
  } catch (err) {
     console.error("FULL ERROR OBJECT 👉", err);
    res.status(err.status || 500).json({ error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const user = await deleteUserService(req.params.id);
    res.status(200).json({ message: "User deleted", user });
  } catch (err) {
     console.error("FULL ERROR OBJECT 👉", err);
    res.status(err.status || 500).json({ error: err.message });
  }
};
