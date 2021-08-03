import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const { ID } = useParams();
  const baseImgUrl = "https://image.tmdb.org/t/p/";
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
  }, []);

  return (
    <div className="rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src={`${baseImgUrl}w500${movie.poster_path}`}
        alt={movie.original_title}
      />
      <button>Add to Favorites</button>
      <p>Release Date:{movie.release_date}</p>
      <p>Language:{movie.original_language}</p>
      <p>Tagline:{movie.tagline}</p>
      <p>Average vote:{movie.vote_average}</p>
      <p>Budget:{movie.budget}</p>
      <p>Overview:{movie.overview}</p>
    </div>
  );
}
