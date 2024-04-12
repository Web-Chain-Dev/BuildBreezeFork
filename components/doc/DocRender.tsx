import React from "react";
import CodeBlock from "../shared/CodeBlock";
import { findDocumentationByLibrary } from "@/lib/actions/docs.actions";
import language from "react-syntax-highlighter/dist/esm/languages/hljs/1c";

const DocRender = async ({ libraryName }: { libraryName: string }) => {
  const fetchedDocs = await findDocumentationByLibrary(libraryName);

  return (
    <div className="flex flex-col items-start gap-10">
      {fetchedDocs.map((doc: any, index: number) => (
        <div className=" flex flex-col gap-8" key={index}>
          <div className="flex flex-col max-w-[42vw] items-start gap-10">
            <h3 className="text-purple-500 text-center text-3xl md:text-4xl lg:text-4xl font-semibold flex-col gap-12">
              {doc.title}
            </h3>
            <p className="text-gray-200 text-[16px] md:text-[18px]">
              {doc.description}
            </p>
          </div>
          <div>
            <CodeBlock
              language="tsx"
              filename={doc.filename}
              value={doc.content}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocRender;
