import mongoose from "mongoose";
import { validateEmail } from "../utils/emailUtils.js";

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    lowecase: true,
    trim: true,
    validate: [validateEmail, "Inserta un email válido."],
  },
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
    required: true,
  },
  foodPreferences: {
    type: Array,
    required: true,
  },
  foodAllergies: {
    type: Array,
    required: true,
  },
  registrationCode: {
    type: String,
  },
  token: {
    type: String,
  },
});

export const User = mongoose.model("User", userSchema);
