import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import EachPost from "./eachPost";

export default function Posts({ items }) {
  return items.map((el) => {
    return (
      <div key={el.id}>
        <p>Title:: {el.titleValue}</p>
        <p>Content:: {el.contentValue}</p>
        <p>Date:: {el.date}</p>
        <p>By:: {el.login}</p>
        <p>IDE::{el.id}</p>
        <button>
          <Link to={`/posts/${el.id}`}>Learn More</Link>
        </button>
      </div>
    );
  });
}
// onclick={() => window.localStorage.setItem("postElement", el)}
