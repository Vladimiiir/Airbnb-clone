import Image from "next/image";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <header className="sticky p-5 top-0 z-50 grid grid-cols-3 bg-white items-center shadow-md md:px-10">
      {/* Left */}
      <div className="relative flex items-center cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt="airbnb_logo"
          width={150}
          height={150}
        />
      </div>
      {/* Middle */}
      <div className="flex items-center rounded-full h-10 p-4  md:border-2 md:shadow-md justify-between">
        <input
          className="flex-grow text-black bg-transparent outline-none text-sm placeholder-gray-400"
          type="text"
          placeholder="Search your next destination"
        />
        <SearchIcon className="hidden md:inline-flex bg-red-400 text-white rounded-full p-1 cursor-pointer" />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-2 justify-end">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-8 w-8" />
        <div className="border-2 rounded-xl p-2 flex items-center ">
          <MenuIcon className="cursor-pointer" />
          <AccountCircleIcon className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;
