import React from "react";
import { useHistory } from "react-router";

export default function Navbar({ setQuery }) {
  let history = useHistory();
  return (
    <div className=" flex justify-around items-center  p-1  bg-white shadow-xs w-full ">
      {/* <div className=" text-lg text-gray-700 hidden md:flex ">
        <span>Movie X</span>
      </div> */}

      <div className=" border-gray-800 rounded-lg px-3 py-2 text-gray-400 cursor-pointer hover:bg-gray-800 hover:text-gray-200">
        <div>
          <p className="text-md font-medium ml-2 ">Favorites</p>
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
          onChange={(event) => {
            setTimeout(() => {
              setQuery(event.target.value);
            }, 2000);
          }}
        />
      </div>
      <br />

      <div className=" border-gray-800 rounded-lg px-3 py-2 text-gray-400 cursor-pointer hover:bg-gray-800 hover:text-gray-200">
        <div>
          <button
            className="text-md font-medium ml-2 "
            onClick={() => {
              localStorage.removeItem("auth");
              history.push("/");
            }}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
}
