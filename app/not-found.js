import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center">
      <img src="/nf.png" className="w-[400px] h-[400px] glow-effect" />
      <h1 className="text-7xl font-bold mb-12 text-[#9AA3AF]">
        404 | Page not found
      </h1>
      <Link href="/" className="text-white bg-dark-1 py-3 px-6 rounded-xl">
        Back to Home
      </Link>
    </div>
  );
};

export default page;
