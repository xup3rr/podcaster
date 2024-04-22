"use client";

import Link from "next/link";
import { useIsFetching } from "@tanstack/react-query";

/**
 * The header component with the title and a loading spinner if fetching data
 */
const Header = () => {
  const isFetching = useIsFetching();

  return (
    <div className="mb-6 mt-6 flex items-center justify-between border-b">
      <Link href="/">
        <h1 className="mb-6 text-3xl font-bold text-blue-400">Podcaster</h1>
      </Link>
      {isFetching ? (
        <span className="relative flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex h-full w-full rounded-full bg-blue-400"></span>
        </span>
      ) : null}
    </div>
  );
};

export default Header;
