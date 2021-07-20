import React from "react";
import ListItem from "./listItem";
import "./todo.css";

export default function ImportLists({
  items,
  deleteItem,
  completeItem,
  changeValue,
}) {
  return (
    <div id="lists">
      {items.map((el) => (
        <ListItem
          key={el.id}
          el={el}
          deleteItem={deleteItem}
          changeValue={changeValue}
          completeItem={completeItem}
        />
      ))}
    </div>
  );
}
