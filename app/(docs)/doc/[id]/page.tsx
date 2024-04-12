import DocRender from "@/components/doc/DocRender";
import React from "react";

const Page = async ({ params: { id } }: SearchParamProps) => {
  // Capitalize the first letter of the id
  const capitalizedId = id.charAt(0).toUpperCase() + id.slice(1);

  return (
    <div
      className="flex bg-cover bg-center flex-col gap-8 items-start">
      <h2 className="text-purple-500 text-center text-5xl md:text-6xl lg:text-7xl font-semibold flex-col gap-12">
        {capitalizedId}
      </h2>
      <DocRender libraryName={id} />
    </div>
  );
};

export default Page;
