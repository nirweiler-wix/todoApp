import React, { FC } from "react";
import { connect } from "react-redux";
import Style from "./todo-item.module.css";
import { todosState } from "../../store/todosReducer";
import Todo from "../App/types";

interface ItemProps {
    todoItem : Todo
    delete : (newTodo : Todo) => void
}


const TodoItem: React.FC<ItemProps> = (props) => {
    const onDeleteHandler = () => {
        props.delete(props.todoItem);
    }

  return (
    <div className={Style.itemContainer}>
    <li key={props.todoItem.id} className={Style.item}>
      {props.todoItem.text}
    </li>
    <button className={Style.closeButton} onClick={onDeleteHandler}>X</button>
    </div>
  );
};

export default TodoItem;