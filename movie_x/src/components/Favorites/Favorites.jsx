import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavNavbar from "../NavBar/FavNavBar";

export default function Favorites() {
  const baseImgUrl = "https://image.tmdb.org/t/p/";
  let [data, setData] = useState([]);
  let plusToggle = false;

  useEffect(() => {
    const username = localStorage.getItem("auth");
    let favoritesArr = localStorage.getItem(`${username}`).split(",").slice(1);
    favoritesArr.forEach((movie_id) => {
      axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${movie_id}?api_key=e4eb68c42ae9fbbf3e605807e7fdce5a&language=en-US`,
      })
        .then((res) => {
          setData((d) => [...d, res.data]);
          console.log(res.data);
        })
        .catch((err) => {
          console.warn(err);
        });
    });
  }, []);

  return (
    <div>
      <FavNavbar />
      <div className="p-10 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-5">
        {data.map((item) => {
          return (
            <div
              className="rounded overflow-hidden shadow-lg"
              key={item.original_title}
            >
              <img
                className="w-full"
                src={`${baseImgUrl}w500${item.poster_path}`}
                alt={item.original_title}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {item.original_title}
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                {item.genres.map((genre) => {
                  return (
                    <div key={genre.id}>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {genre.name}
                      </span>
                    </div>
                  );
                })}
              </div>
              <button
                className="p-0 w-12 h-10 bg-blue-300 rounded-md hover:bg-blue-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
                onClick={() => {}}
              >
                {plusToggle ? <span>-</span> : <span>+</span>}
              </button>
              <Link to={`/movies/${item.id}`}>
                <button className="p-0 w-16 h-10 bg-blue-300 rounded-md hover:bg-blue-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none text-white ml-5">
                  Details
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
