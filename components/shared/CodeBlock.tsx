"use client";

import React, { useState } from "react"; // Import useState
import { Copy, CopyCheck } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  atomDark
} from "react-syntax-highlighter/dist/esm/styles/prism";
type CodeBlockProps = {
  language: string;
  value: string;
  filename: string;
};

const CodeBlock = ({ language, value, filename }: CodeBlockProps) => {
  const [isCopied, setIsCopied] = useState(false); // State to manage icon visibility

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      console.log("Copied to clipboard!");
      setIsCopied(true); // Set state to true to show CopyCheck

      // Revert the icon back to Copy after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative text-[15px] max-w-[82vw] md:max-w-[52vw] w-full md:w-1/2 lg:w-1/3 mt-6">
      <div className="max-w-[90vw] rounded-[22px] md:w-[42vw]">
        <div className="absolute -top-10 [100px] w-[90vw] md:w-[42vw] z-[20] py-6 h-[28px] p-2 bg-[#1d1f21] rounded-t-[20px] flex-between">
          <div className="text-[#a4f342]">{filename}</div>

          <button onClick={handleCopy}>
            {isCopied ? <CopyCheck className="text-green-200" /> : <Copy />}{" "}
            {/* Conditional rendering based on state */}
          </button>
        </div>
        <div className="h-full rounded-[22px]">
          <SyntaxHighlighter language={language} style={atomDark}>
            {value}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CodeBlock;
