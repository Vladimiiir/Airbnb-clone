import Image from "next/image";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { GlobeAltIcon, UsersIcon } from "@heroicons/react/24/solid";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/router";

function Header({ placeholder }) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
    setStartDate(new Date());
    setEndDate(new Date());
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests: numberOfGuests,
      },
    });
  };

  return (
    <header className="sticky p-5 top-0 z-50 grid grid-cols-3 bg-white items-center shadow-md md:px-10">
      {/* Left */}
      <div
        className="relative flex items-center cursor-pointer my-auto"
        onClick={() => router.push("/")}
      >
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow text-black bg-transparent outline-none text-sm placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your search"}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto my-auto ">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-bold">Number of Guests</h2>
            <UsersIcon className="h-5" />
            <input
              value={numberOfGuests}
              onChange={(e) => setNumberOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-500"
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-400" onClick={resetInput}>
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
