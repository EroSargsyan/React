import React from "react";
import "./todo.css";

export default function ImportLists({ items, deleteItem, completeItem }) {
  return (
    <div id="lists">
      {items.map((el) => (
        <li key={el.id}>
          <input
            type="text"
            value={el.textValue}
            onChange={el.onChange}
            id={el.id}
            className={el.className}
          />
          <button
            type="submit"
            id="completeButton"
            onClick={() => {
              completeItem(el);
            }}
          >
            Complete
          </button>
          <button
            type="submit"
            id="deleteButton"
            onClick={() => {
              deleteItem(el);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
}
