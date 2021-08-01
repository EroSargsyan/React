import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className=" flex justify-around items-center  p-1  bg-white shadow-xs w-full ">
      <div className=" text-lg text-gray-700 hidden md:flex ">
        <Link to="/movies">Movie X</Link>
      </div>

      <div className=" border-gray-800 rounded-lg px-3 py-2 text-gray-400 cursor-pointer hover:bg-gray-800 hover:text-gray-200">
        <div>
          <p className="text-md font-medium ml-2 ">Favorites</p>
        </div>
      </div>

      <br />

      <div className=" border-gray-800 rounded-lg px-3 py-2 text-gray-400 cursor-pointer hover:bg-gray-800 hover:text-gray-200">
        <div>
          <p className="text-md font-medium ml-2 ">Log out</p>
        </div>
      </div>

      <br />

      <div className="w-80 h-10 pl-3 pr-2 bg-white border rounded-full flex   ">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className="appearance-none w-full outline-none focus:outline-none active:outline-none "
        />
        <button
          type="submit"
          className="ml-1 outline-none focus:outline-none active:outline-none"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
