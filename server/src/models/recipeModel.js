import mongoose from "mongoose";
import { Schema } from "mongoose";

const ingredientsSchema = mongoose.Schema({
  name: {
    type: Schema.Types.ObjectId,
    ref: "Ingredient",
  },
  unit: {
    type: Schema.Types.ObjectId,
    ref: "Unit",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

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
    ingredients: [ingredientsSchema],
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

export default Recipe;
