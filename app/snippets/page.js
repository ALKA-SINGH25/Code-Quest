import Preview from "@/components/snippets/Preview";
import ToolBar from "@/components/snippets/ToolBar";
import React from "react";

const Snippets = () => {
  return (
    <div>
      <Preview />

      <div className="flex flex-col pt-16 pb-40 items-center justify-center"></div>
      <ToolBar />
    </div>
  );
};

export default Snippets;
