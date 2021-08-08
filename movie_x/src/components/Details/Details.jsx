import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsNavbar from "../NavBar/DetailsNavBar";

export default function Details() {
  const { ID } = useParams();
  let [movie, setMovie] = useState("");
  let username = localStorage.getItem("auth");
  let [plusToggle, setPlusToggle] = useState(true);
  let favoritesArr = localStorage.getItem(`${username}`).split(",").slice(1);

  useEffect(() => {
    axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${Number(
        ID
      )}?api_key=e4eb68c42ae9fbbf3e605807e7fdce5a&language=en-US`,
    })
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [ID]);

  return !movie ? null : (
    <div>
      <DetailsNavbar />
      <div className="pt-16 min-w-screen min-h-screen bg-white flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                <img
                  src={
                    movie.backdrop_path
                      ? "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path
                      : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
                  }
                  className="w-full relative z-10 mb-8"
                  alt="company_name"
                />
                <span className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-md px-10 py-2 font-semibold">
                  Released: {movie.release_date}
                </span>
                <button className="bg-blue-500 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded ml-4 ">
                  <span>{movie.original_language}</span>
                </button>
                <button className="bg-blue-300 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded mt-2 ml-2">
                  <span>Rating {movie.vote_average}</span>
                </button>
                <button
                  className="p-0 w-16 h-10 bg-green-300 rounded-md hover:bg-green-400 font-semibold text-white  active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none justify-self-end ml-2"
                  onClick={() => {
                    if (
                      localStorage
                        .getItem(`${username}`)
                        .split(",")
                        .includes(String(movie.id))
                    ) {
                      let filtered = localStorage
                        .getItem(`${username}`)
                        .split(",")
                        .filter((filterEl) => filterEl !== String(movie.id));

                      localStorage.setItem(`${username}`, [filtered]);
                    } else {
                      localStorage.setItem(`${username}`, [
                        localStorage.getItem(`${username}`),
                        movie.id,
                      ]);
                    }
                    setPlusToggle(!plusToggle);
                  }}
                >
                  {favoritesArr.includes(String(movie.id)) ? "Remove" : "Add"}
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold font-serif uppercase text-2xl mb-5">
                  {movie.title}
                </h1>
                <h6 className="font-bold uppercase  mb-1 font-sans">
                  {movie.tagline}
                </h6>
                <p className="text-sm font-sans">{movie.overview}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-around mt-10">
            {movie.production_companies.map((comp) => (
              <img
                key={comp.id}
                className="h-16 w-18 inline-block"
                src={
                  comp.logo_path
                    ? "https://image.tmdb.org/t/p/w500/" + comp.logo_path
                    : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
                }
                alt="companies"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
