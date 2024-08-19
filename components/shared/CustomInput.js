import React from "react";

const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <>
      <textarea
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        className="flex-grow focus:outline-none w-full  bg-[#1e1e1e] text-light-4 mt-2 rounded-lg p-2 font-mono resize-none"
      ></textarea>
    </>
  );
};

export default CustomInput;
