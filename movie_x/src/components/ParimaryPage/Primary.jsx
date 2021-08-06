import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import axios from "axios";
import ListMovies from "../ListMovies/ListMovies";

export default function Primary() {
  let [items, setItems] = useState([]);
  let [pageNumber, setPageNumber] = useState(1);
  let [loading, setLoading] = useState(true);
  let [query, setQuery] = useState("");
  const baseImgUrl = "https://image.tmdb.org/t/p/";

  const scrollHandler = (event) => {
    if (
      event.target.documentElement.scrollHeight <=
      event.target.documentElement.scrollTop + window.innerHeight
    ) {
      setLoading(true);
    }
  };

  useEffect(() => {
    if (!query) {
      setItems([]);
      setLoading(true);
      setPageNumber(1);
    }
    if (query) {
      axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/search/movie?api_key=e4eb68c42ae9fbbf3e605807e7fdce5a&language=en-US&query=${query}&page=1&include_adult=false`,
      })
        .then((res) => {
          setItems([...res.data.results]);
        })
        .catch((err) => {
          console.warn(err);
        });
    }
  }, [query]);

  useEffect(() => {
    if (loading && !query) {
      axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/discover/movie?api_key=e4eb68c42ae9fbbf3e605807e7fdce5a&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_watch_monetization_types=flatrate`,
      })
        .then((res) => {
          setItems([...items, ...res.data.results]);
          setPageNumber((prevState) => prevState + 1);
        })
        .catch((err) => {
          console.warn(err);
        })
        .finally(setLoading(false));
    }
  }, [loading, query, pageNumber, items]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => document.removeEventListener("scroll", scrollHandler);
  }, [loading]);

  return (
    <>
      <div>
        <Navbar setQuery={setQuery} />
        <ListMovies items={items} baseImgUrl={baseImgUrl} />
      </div>
    </>
  );
}
