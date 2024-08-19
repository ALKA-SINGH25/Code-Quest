"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ user }) => {
  const pathname = usePathname();

  return (
    <div className="max-md:hidden flex gap-3 bg-[#9BA3AF] rounded-full">
      <Link
        href={user ? "/learn" : "/login"}
        className={`py-2 px-6 font-medium ${
          (pathname === "/learn" || pathname.startsWith("/courses")) &&
          "bg-dark-1 text-white rounded-full"
        }`}
      >
        Learn
      </Link>
      <Link
        href={user ? "/roadmaps" : "/login"}
        className={`py-2 px-6 font-medium ${
          (pathname === "/roadmaps" || pathname.startsWith("/roadmaps")) &&
          "bg-dark-1 text-white rounded-full"
        }`}
      >
        Roadmaps
      </Link>
      <Link
        href={user ? "/problems" : "/login"}
        className={`py-2 px-6 font-medium ${
          (pathname === "/problems" || pathname.startsWith("/problems")) &&
          "bg-dark-1 text-white rounded-full"
        }`}
      >
        Problems
      </Link>
      <Link
        href={user ? "/contests" : "/login"}
        className={`py-2 px-6 font-medium ${
          (pathname === "/contests" || pathname.startsWith("/contests")) &&
          "bg-dark-1 text-white rounded-full"
        }`}
      >
        Contest
      </Link>
      <Link
        href={user ? "/sync" : "/login"}
        className={`py-2 px-6 font-medium ${
          (pathname === "/sync" || pathname.startsWith("/sync")) &&
          "bg-dark-1 text-white rounded-full"
        }`}
      >
        Sync
      </Link>
      <Link
        href={user ? "/dev" : "/login"}
        className={`py-2 px-6 font-medium ${
          pathname === "/dev" && "bg-dark-1 text-white rounded-full"
        }`}
      >
        Dev
      </Link>
      <Link
        href={user ? "/snippets" : "/login"}
        className={`py-2 px-6 font-medium ${
          pathname === "/snippets" && "bg-dark-1 text-white rounded-full"
        }`}
      >
        Snippets
      </Link>
      <Link
        href={user ? "/news" : "/login"}
        className={`py-2 px-6 font-medium ${
          (pathname === "/news" || pathname.startsWith("/news")) &&
          "bg-dark-1 text-white rounded-full"
        }`}
      >
        News
      </Link>
    </div>
  );
};

export default NavLinks;
