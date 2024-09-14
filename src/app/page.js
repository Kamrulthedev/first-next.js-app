import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-zinc-500 h-screen">
      <h1 className="text-2xl font-serif text-center uppercase text-black">
        This is My First Next.js Application
      </h1>
      <div className="text-center mt-10">
        <Link
          href={"/news/blog/blog1"}
          className="uppercase text-center font-serif bg-green-500 text-black p-3 rounded-lg"
        >
          Blog Page
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
