import Image from "next/image";
import React from "react";

const ImageGElllaryPage = () => {
  return (
    <div className="h-screen">
      <h1>This is Image Gellary</h1>
      <img
        src="https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=3840&q=75"
        alt="Next Image"
        width={500}
        height={100}
                className="mx-auto"
      />

      <h1 className="text-center m-5">This is NExt.Js Image Tag</h1>
      <Image
        src="https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=3840&q=75"
        alt="Next Image"
        width={500}
        height={100}
        className="mx-auto"
      />
    </div>
  );
};

export default ImageGElllaryPage;
