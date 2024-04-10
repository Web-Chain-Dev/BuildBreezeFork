import { Schema, model, models } from "mongoose";

const DocumentationSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  // Additional fields as needed
});

const Documentation =
  models?.Documentation || model("Documentation", DocumentationSchema);

export default Documentation;
