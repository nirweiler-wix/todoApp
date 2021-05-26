import React, { BaseSyntheticEvent, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todosState } from "../../store/todosReducer";

import Style from "./todo-input.module.css";

const TodoInput: React.FC = () => {
  const dispatch = useDispatch();
  console.log("nir: todo-input");
  const [enteredTodo, setEnteredTodo] = React.useState("");

  const inputChangedHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    setEnteredTodo(event.target.value);
  };

  const submitHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    if (enteredTodo.trim().length !== 0) {
      dispatch({ type: "DONE", payload: enteredTodo.trim() });
    } else {
      alert("Cannot add empty todo. Please try again");
    }
  };

  const closeInputFormHandler = () => {
    dispatch({ type: "CLOSE_INPUT" });
  };

  return (
    <div>
      <div className={Style.header}>
        <h1>Add To-do</h1>
        <button className={Style.closeButton} onClick={closeInputFormHandler}>
          X
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div>
          <label>To-do</label>
          <input
            type="text"
            onChange={inputChangedHandler}
            placeholder="What need to be done?"
          />
          <button type="submit" className={Style.doneButton}>
            Done
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
