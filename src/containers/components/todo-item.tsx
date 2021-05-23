import React, { FC } from "react";
import "./todo-item.css";

const TodoItem: React.FC<{text: string}> = (props) => {
  console.log("nir: todo-item");

  return <li>{props.text}</li>;
};

export default TodoItem;
