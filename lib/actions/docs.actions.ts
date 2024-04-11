"use server";

// server/actions/documentation.ts
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import Documentation from "../database/models/docs.model";

// Create Documentation

export async function createDoc(doc: {
  title: string;
  content: string;
  library: string;
}) {
  try {
    await connectToDatabase();

    const newDoc = await Documentation.create(doc);

    return JSON.parse(JSON.stringify(newDoc));
  } catch (error) {
    handleError(error);
  }
}

// Read Documentation by ID
export async function getDocumentationById(docId: string) {
  try {
    await connectToDatabase();
    const doc = await Documentation.findById(docId);
    if (!doc) throw new Error("Documentation not found");
    return JSON.parse(JSON.stringify(doc));
  } catch (error) {
    handleError(error);
  }
}

// Update Documentation
export async function updateDocumentation(
  docId: string,
  doc: { title?: string; content?: string }
) {
  try {
    await connectToDatabase();
    const updatedDoc = await Documentation.findByIdAndUpdate(docId, doc, {
      new: true,
    });
    if (!updatedDoc) throw new Error("Documentation update failed");
    return JSON.parse(JSON.stringify(updatedDoc));
  } catch (error) {
    handleError(error);
  }
}

// Delete Documentation
export async function deleteDocumentation(docId: string) {
  try {
    await connectToDatabase();
    const deletedDoc = await Documentation.findByIdAndDelete(docId);
    if (!deletedDoc) throw new Error("Documentation not found");
    return JSON.parse(JSON.stringify(deletedDoc));
  } catch (error) {
    handleError(error);
  }
}

// export async function findDocumentationByLibrary(libraryName: string) {
//   try {
//     await connectToDatabase();
//     const docs = await Documentation.find({ library: libraryName });
//     if (!docs)
//       throw new Error("No documentation found for the specified library");
//     // Extract content fields from the found documents
//     const contentFields = docs.map((doc) => doc.content);

//     // console.log(contentFields);
//     return contentFields;
//   } catch (error) {
//     handleError(error);
//   }
// }

export async function findDocumentationByLibrary(libraryName: string) {
  try {
    await connectToDatabase();
    const docs = await Documentation.find({ library: libraryName });
    if (!docs || docs.length === 0) console.log("doc not found");
    // throw new Error("No documentation found for the specified library");
    // Return the entire array of documents

    return JSON.parse(JSON.stringify(docs));
  } catch (error) {
    handleError(error);
  }
}

// Utility Function to Convert Markdown to HTML
// export function convertMarkdownToHtml(markdown: string) {
//   return marked(markdown);
// }
