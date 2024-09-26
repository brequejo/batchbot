import mongoose from "mongoose";
import { Schema } from "mongoose";

const ingredientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    units: {
      type: Schema.Types.ObjectId,
      ref: "Unit",
      required: true,
    },
  },
  { timestamps: true }
);

export const Ingredient = mongoose.model("Ingredient", ingredientSchema);
