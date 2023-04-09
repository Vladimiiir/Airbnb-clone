import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        alt="airbnb_logo"
        fill={"absolute"}
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button
          type="submit"
          className="text-purple-500 bg-white border-2 rounded-full border-none px-10 py-4 shadow-md my-5 font-bold hover:shadow-xl active:scale-90 transition duration-150"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;
