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
    // New field for the library
    type: String,
    default: "Clerk",
    required: true, // Make it required if you want to enforce that every documentation entry must have a library
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
