import React, { BaseSyntheticEvent, FC } from "react";
import Style from "./todo-input.module.css";

const TodoInput: React.FC<{ onSubmit: Function }> = (props) => {
  console.log("nir: todo-input");
  const [enteredTodo, setEnteredTodo] = React.useState("");

  const inputChangedHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    setEnteredTodo(event.target.value);
  };

  const submitHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    if (enteredTodo.trim().length !== 0) {
        props.onSubmit(enteredTodo);
    }
    else {
        alert("Cannot add empty todo");
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Add To-do</h1>
        <div>
          <label>To-do</label>
          <input type="text" onChange={inputChangedHandler} placeholder="What need to be done?" />
          <button type="submit" className={Style.doneButton}>Done</button>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
