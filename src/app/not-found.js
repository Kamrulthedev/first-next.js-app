import Link from "next/link";
import React from "react";

const NotFountPage = () => {
  return (
    <div className="text-2xl font-serif text-center h-screen mx-auto flex flex-col justify-center items-center">
      <h1 className="mb-4">404 NOT FOUND PAGE</h1>
      <Link href="/" className="text-xl font-serif bg-green-500 p-2 rounded-lg">
        Home
      </Link>
    </div>
  );
};

export default NotFountPage;
