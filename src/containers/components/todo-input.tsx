import React, { BaseSyntheticEvent, FC } from "react";
import Style from "./todo-input.module.css";

const TodoInput: React.FC<{ onSubmit: Function }> = (props) => {
  console.log("nir: todo-input");
  const [enteredTodo, setEnteredTodo] = React.useState("");

  const inputChangedHandler = (event: BaseSyntheticEvent) => {
    setEnteredTodo(event.target.value);
  };

  const submitHandler = () => {
    props.onSubmit(enteredTodo);
  };

  return (
    <form onSubmit={submitHandler}>
      <h1>Add To-do</h1>
      <div>
        <label>To-do</label>
        <input type="text" onChange={inputChangedHandler} />
        <button type="submit">Done</button>
      </div>
    </form>
  );
};

export default TodoInput;
