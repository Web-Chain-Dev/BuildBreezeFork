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
  library: {
    type: String,
    default: "Clerk",
    required: true,
  },
  description: {
    type: String, // Assuming the description is a string
    required: true, // Make it optional or set to true if it's required
  },
  filename: {
    type: String, // Assuming the filename is a string
    required: true, // Make it optional or set to true if it's required
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
