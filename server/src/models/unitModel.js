import mongoose from "mongoose";

const unitSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    abbreviation: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Unit = mongoose.model("Unit", unitSchema);
