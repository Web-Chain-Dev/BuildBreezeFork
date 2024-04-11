import React from "react";
import CodeBlock from "../shared/CodeBlock";
import { findDocumentationByLibrary } from "@/lib/actions/docs.actions";
import language from "react-syntax-highlighter/dist/esm/languages/hljs/1c";

const DocRender = async ({ libraryName }: { libraryName: string }) => {
  const fetchedDocs = await findDocumentationByLibrary(libraryName);

  return (
    <div className="flex flex-col gap-10">
      {fetchedDocs.map((doc: any, index: number) => (
        <CodeBlock
          language="tsx"
          key={index}
          filename={doc.title}
          value={doc.content}
        />
      ))}
    </div>
  );
};

export default DocRender;
