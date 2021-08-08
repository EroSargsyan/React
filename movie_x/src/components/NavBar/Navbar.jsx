import React from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

export default function Navbar({ setQuery }) {
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
                  to="/favorites"
                >
                  Favorites
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

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
  );
}
