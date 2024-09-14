"use client"
import React, { useState } from "react";

const HomePage = () => {

const [counter, setCounter] = useState(0)
console.log("Hello Wold")

  return (
    <div className="bg-zinc-500 h-screen">
      <h1 className="text-2xl font-serif text-center uppercase text-black">
        This is My First Next.js Application
      </h1>
      <h1 className="text-center text-black mt-4 text-2xl font-serif">Counter : {counter}</h1>
      <div className="text-center mt-10">
        <button
        onClick={()=> setCounter(counter + 1)}
          className="uppercase text-center m-6 font-serif bg-green-500 text-black p-3 rounded-lg"
        >
          increase
        </button>
        <button
           onClick={()=> setCounter(counter - 1)}
          className="uppercase text-center font-serif bg-green-500 text-black p-3 rounded-lg"
        >
          derease
        </button>
      </div>
    </div>
  );
};

export default HomePage;
