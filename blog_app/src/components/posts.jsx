import React from "react";

export default function Posts({ items }) {
  return items.map((el) => {
    return (
      <div key={el.id}>
        <p>Title:: {el.titleValue}</p>
        <p>Content:: {el.contentValue}</p>
        <p>Date:: {el.date}</p>
      </div>
    );
  });
}
