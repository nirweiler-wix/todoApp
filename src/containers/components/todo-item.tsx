import React, { FC } from "react";
import Style from "./todo-item.module.css";

const TodoItem: React.FC<{text: string}> = (props) => {
  console.log("nir: todo-item");

  return <li className={Style.item}>{props.text}</li>;
};

export default TodoItem;
