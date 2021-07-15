import React, { BaseSyntheticEvent } from "react";
import { Todo } from "../App/types";
import Style from "./todo-input.module.css";
import { InputProps } from "../types";

export const TodoInput: React.FC<InputProps> = (props) => {
  const [value, setValue] = React.useState("");

  const inputChangedHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const submitHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    const trimedValue = value.trim();

    if (trimedValue.length !== 0) {
      const newTodo: Todo = {
        text: trimedValue,
        id: Math.random(),
        isDone: false,
      };
      props.submit(newTodo);
    } else {
      alert("Cannot add empty todo. Please try again");
    }
  };

  return (
    <div>
      <div className={Style.header}>
        <h1>Add To-do</h1>
        <button className={Style.closeButton} onClick={props.close}>X</button>
      </div>
      <form onSubmit={submitHandler}>
          <label>To-do</label>
          <input
            type="text"
            onChange={inputChangedHandler}
            placeholder="What need to be done?"
          />
          <button type="submit" className={Style.doneButton}> Done </button>
      </form>
    </div>
  );
};