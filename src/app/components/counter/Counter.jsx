"use client";
import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1 className="text-center text-black mt-4 text-2xl font-serif">
        Counter : {counter}
      </h1>
      <div className="text-center mt-10">
        <button
          onClick={() => setCounter(counter + 1)}
          className="uppercase text-center m-6 font-serif bg-green-500 text-black p-3 rounded-lg"
        >
          increase
        </button>
        <button
          onClick={() => setCounter(counter - 1)}
          className="uppercase text-center font-serif bg-green-500 text-black p-3 rounded-lg"
        >
          derease
        </button>
      </div>
    </div>
  );
};

export default Counter;
