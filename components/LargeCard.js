import Image from "next/image";
import React from "react";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <>
      <div className="relative h-96 min-w-[300px] ">
        <Image
          src={img}
          fill={"absolute"}
          className="rounded-2xl object-cover"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button
          className="text-sm text-white bg-gray-900 px-4 py-3 rounded-lg mt-5 hover:scale-x-105 transition transform duration-300 hover:bg-purple-500"
          type="submit"
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}

export default LargeCard;
