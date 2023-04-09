import Image from "next/image";
import React from "react";

function SmallCard({ img, location, distance }) {
  return (
    <div className="flex items-center mt-5 space-x-4 rounded-lg cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out text-gray-500  hover:text-purple-500 hover:font-bold">
      {/* Left */}
      <div className="relative  h-16 w-16">
        <Image
          src={img}
          alt="smallCard"
          width={100}
          height={100}
          className="rounded-lg"
        />
      </div>
      {/* Right */}
      <div className="">
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
