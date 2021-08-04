import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Details() {
  const { ID } = useParams();
  let [movie, setMovie] = useState("");

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
    <div className="pt-16 min-w-screen min-h-screen bg-white flex items-center p-5 lg:p-10 overflow-hidden relative">
      <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
          <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
            <Link to="/movies">
              <button className="bg-green-500 px-4 py-2 font-semibold text-white  space-x-2 rounded mb-20 ">
                Go Back
              </button>
            </Link>
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
              <button className="bg-blue-300 px-4 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded mt-2">
                <span>Rating {movie.vote_average}</span>
              </button>
              <div className=" absolute top-10 bottom-10 left-10 right-10 z-0"></div>
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
  );
}
