import mongoose from "mongoose";
import { Schema } from "mongoose";

const recipeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    tags: {
      type: Array,
    },
    image: {
      type: String,
      required: true,
    },
    isPublic: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export const Recipe = mongoose.model("Recipe", recipeSchema);
