import React from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

export default function DetailsNavbar() {
  let history = useHistory();

  return (
    <div
      id="header"
      className="w-full z-30  py-1 bg-white shadow-lg border-b border-green-400 mt-1"
    >
      <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
        <div
          className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
              <li>
                <NavLink
                  className="text-md font-medium ml-2  px-4 py-2  text-green-500  space-x-2 inline-block no-underline hover:text-green-700 text-lg  lg:-ml-2"
                  to="/movies"
                >
                  Movies
                </NavLink>
              </li>
              <li>
                <NavLink className="text-md font-medium ml-2  px-4 py-2  text-green-500  space-x-2 inline-block no-underline hover:text-green-700 text-lg  lg:-ml-2" to="/favorites">
                  Favorites
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div
          className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
          id="nav-content"
        >
          <div className="auth flex items-center w-full md:w-full">
            <button
              className="bg-red-500 px-4 py-2  text-white  space-x-2 rounded "
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
    </div>

    // <div className=" flex justify-between items-center    bg-white shadow-xs w-full ">
    //   <div className="bg-green-500 px-4 py-2  text-white  space-x-2 rounded  mt-8">
    //     <NavLink className="text-md font-medium ml-2 " to="/movies">
    //       <button>Go to Movies</button>
    //     </NavLink>
    //   </div>

    //   <br />

    //   <div className="bg-green-500 px-4 py-2  text-white  space-x-2 rounded  mt-8">
    //     <NavLink className="text-md font-medium ml-2 " to="/favorites">
    //       <button>Go to Favorites</button>
    //     </NavLink>
    //   </div>

    //   <br />

    //   <div>
    //     <button
    //       className="bg-red-500 px-4 py-2  text-white  space-x-2 rounded mt-8"
    //       onClick={() => {
    //         localStorage.removeItem("auth");
    //         history.push("/");
    //       }}
    //     >
    //       Log out
    //     </button>
    //   </div>
    // </div>
  );
}
