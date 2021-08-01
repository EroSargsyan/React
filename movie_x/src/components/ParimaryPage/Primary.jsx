import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import axios from "axios";
import genres from "../GenresAPI/genres";
import PopularMovies from "../PopularMovies/PopularMovies";

export default function Primary() {
  let [items, setItems] = useState([]);
  let [pageNumber, setPageNumber] = useState(1);
  const baseUrl = `https://api.themoviedb.org/3/discover/movie?api_key=e4eb68c42ae9fbbf3e605807e7fdce5a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`;
  const baseImgUrl = "https://image.tmdb.org/t/p/";

  useEffect(() => {
    axios({
      // method: "GET",
      // url: `https://api.themoviedb.org/3/discover/movie?api_key=e4eb68c42ae9fbbf3e605807e7fdce5a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`,
    }).then((res) => {
      setItems((prevItems) => [...res.data.results]);
    });
  }, [items, pageNumber]);
  return (
    <div>
      <Navbar />
      <PopularMovies items={items} baseImgUrl={baseImgUrl} />
    </div>
  );
}
