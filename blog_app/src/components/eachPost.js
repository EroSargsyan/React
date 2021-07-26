import React from "react";
import { useParams, useHistory } from "react-router-dom";

export default function EachPost({ items, deleteItem }) {
  let { ide } = useParams();
  const data = items.filter((item) => ide == item.id);
  const history = useHistory();
  return (
    <div>
      <div>
        <p>Content:: {data[0].contentValue}</p>
        <p>Date:: {data[0].date}</p>
        <p>By:: {data[0].login}</p>
      </div>
      <div>
        <button>Edit</button>
        <button>Save</button>
        <button
          onClick={() => {
            if (window.localStorage.getItem("login") === data[0].login) {
              history.push("/posts");
              deleteItem(ide);
            }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
