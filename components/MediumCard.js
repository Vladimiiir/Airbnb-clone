import Image from "next/image";
import React from "react";

function MediumCard({ img, title }) {
  return (
    <div className="mt-5 space-x-4 text-gray-500 hover:scale-105 transition transform duration-300 ease-out cursor-pointer hover:text-purple-500 hover:font-bold">
      <div className="relative h-80 w-80">
        <Image src={img} width={300} height={300} className="rounded-xl" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
}

export default MediumCard;
