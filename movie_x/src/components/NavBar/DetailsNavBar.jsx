import React from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

export default function DetailsNavbar() {
  let history = useHistory();

  return (
    <div className=" flex justify-between items-center    bg-white shadow-xs w-full ">
      <div className="bg-green-500 px-4 py-2  text-white  space-x-2 rounded  mt-8 ml-12">
        <NavLink className="text-md font-medium ml-2 " to="/movies">
          <button>Go to Movies</button>
        </NavLink>
      </div>

      <br />

      <div className="bg-green-500 px-4 py-2  text-white  space-x-2 rounded  mt-8 ml-12">
        <NavLink className="text-md font-medium ml-2 " to="/favorites">
          <button>Go to Favorites</button>
        </NavLink>
      </div>

      <br />

      <div>
        <button
          className="bg-red-500 px-4 py-2  text-white  space-x-2 rounded mt-8 mr-12"
          onClick={() => {
            localStorage.removeItem("auth");
            history.push("/");
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
}
