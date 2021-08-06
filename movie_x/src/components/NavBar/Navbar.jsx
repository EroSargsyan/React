import React from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

export default function Navbar({ setQuery }) {
  let history = useHistory();
  return (
    <div className=" flex justify-between items-center  p-1  bg-white shadow-xs w-full mt-8">
      <div className="bg-green-500 px-4 py-2  text-white  space-x-2 rounded ml-12 ">
        <NavLink className="text-md font-medium ml-2 " to="/favorites">
          <button>Favorites</button>
        </NavLink>
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

      <div className="bg-red-500 px-4 py-2  text-white  space-x-2 rounded mr-12">
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
