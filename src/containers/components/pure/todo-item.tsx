import React, { FC } from "react";
import Style from "./todo-item.module.css";
import { ItemProps } from './types';

const TodoItem: React.FC<ItemProps> = (props) => {
    const onDeleteHandler = () => {
        props.delete(props.todoItem);
    }

    const onChangeCheckBoxHander = () => {
        props.completed(props.todoItem);
    }

  return (
    <div className={Style.itemContainer}>
      <li key={props.todoItem.id} className={(props.todoItem.isDone? Style.completedItem : Style.item)}>
        {props.todoItem.text}
      </li>
      <input type="checkbox" onChange={onChangeCheckBoxHander} checked={props.todoItem.isDone}/>
      <button className={Style.closeButton} onClick={onDeleteHandler}>X</button>
    </div>
  );
};

export default TodoItem;