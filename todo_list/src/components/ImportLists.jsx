import React from "react";
import ListItem from "./listItem";
import "./todo.css";
import PropTypes from "prop-types";
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

ImportLists.propTypes = {
  items: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
  completeItem: PropTypes.func.isRequired,
};
