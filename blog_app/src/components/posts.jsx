import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default function Posts({ items }) {

  return items.map((el) => {
    return (
      <div key={el.id}>
        <p>Title:: {el.titleValue}</p>
        <p>Content:: {el.contentValue}</p>
        <p>Date:: {el.date}</p>
        <p>By:: {el.login}</p>
        <Link to="/posts/`{el.id">Learn More</Link>
      </div>
    );
  });
}
