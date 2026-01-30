import { supabase } from "../config/supabase.js";
import bcrypt from "bcrypt";

export const createUserService = async (userData) => {
  const { name, email, password, age } = userData;

  // check duplicate email
  const { data: existingUser } = await supabase
    .from("users2")
    .select("id")
    .eq("email", email)
    .single();

  if (existingUser) {
    throw { status: 409, message: "Email already exists" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error } = await supabase
    .from("users2")
    .insert([{ name, email, password: hashedPassword, age }])
    .select()
    .single();

  if (error) throw error;

  return data;
};

export const getAllUsersService = async () => {
  const { data, error } = await supabase.from("users2").select("*");
  if (error) throw error;
  return data;
};

export const getUserByIdService = async (id) => {
  const { data, error } = await supabase
    .from("users2")
    .select("*")
    .eq("id", id)
    .single();

  if (!data) throw { status: 404, message: "User not found" };
  if (error) throw error;

  return data;
};

export const updateUserService = async (id, updates) => {
  const { data, error } = await supabase
    .from("users2")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (!data) throw { status: 404, message: "User not found" };
  if (error) throw error;

  return data;
};

export const deleteUserService = async (id) => {
  const { data, error } = await supabase
    .from("users2")
    .delete()
    .eq("id", id)
    .select()
    .single();

  if (!data) throw { status: 404, message: "User not found" };
  if (error) throw error;

  return data;
};
