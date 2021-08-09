import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import genresArr from "../GenresAPI/genres";

 function ListMovies({ items, baseImgUrl }) {
  let username = localStorage.getItem("auth");
  let [plusToggle, setPlusToggle] = useState(true);
  let favoritesArr = localStorage.getItem(`${username}`).split(",").slice(1);

  return (
    <div className="p-10 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-5 ">
      {items.map((el) => {
        return (
          <div
            className="rounded overflow-hidden shadow-lg"
            key={el.original_title}
          >
            <img
              className="w-full"
              src={`${baseImgUrl}w500${el.poster_path}`}
              alt={el.original_title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{el.original_title}</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              {genresArr.map((gen) => {
                return el.genre_ids.includes(gen.id) ? (
                  <div key={gen.id}>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {gen.name}
                    </span>
                  </div>
                ) : null;
              })}
            </div>
            <button
              className="p-0 w-16 h-10 bg-green-300 rounded-md hover:bg-green-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none justify-self-end font-semibold text-white"
              onClick={() => {
                if (
                  localStorage
                    .getItem(`${username}`)
                    .split(",")
                    .includes(String(el.id))
                ) {
                  let filtered = localStorage
                    .getItem(`${username}`)
                    .split(",")
                    .filter((filterEl) => filterEl !== String(el.id));

                  localStorage.setItem(`${username}`, [filtered]);
                } else {
                  localStorage.setItem(`${username}`, [
                    localStorage.getItem(`${username}`),
                    el.id,
                  ]);
                }
                setPlusToggle(!plusToggle);
              }}
            >
              {favoritesArr.includes(String(el.id)) ? "Remove" : "Add"}
            </button>
            <Link to={`/movies/${el.id}`}>
              <button className="p-0 w-16 h-10 bg-blue-300 rounded-md hover:bg-blue-400 font-semibold text-white active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none  ml-5">
                Details
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

ListMovies.propTypes = {
  items: PropTypes.array.isRequired,
  baseImgUrl: PropTypes.string.isRequired,
};


export default  ListMovies