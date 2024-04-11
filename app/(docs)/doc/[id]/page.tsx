import DocRender from "@/components/doc/DocRender";
import Sidebar from "@/components/shared/Sidebar";
import { findDocumentationByLibrary } from "@/lib/actions/docs.actions";
import React, { useEffect, useState } from "react";

const Page = async ({ params: { id } }: SearchParamProps) => {
  return (
    <div>
      <h2 className="text-purple-500 text-center text-5xl md:text-6xl lg:text-7xl font-semibold flex-col gap-12">
        {id}
      </h2>
      <DocRender libraryName={id} />
    </div>
  );
};

export default Page;
