import React, { BaseSyntheticEvent } from "react";
import { Todo } from "../../App/types";
import Style from "./todo-input.module.css";
import { InputProps } from "./types";

const TodoInput: React.FC<InputProps> = (props) => {
  const [enteredTodo, setEnteredTodo] = React.useState("");

  const inputChangedHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    setEnteredTodo(event.target.value);
  };

  const submitHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    if (enteredTodo.trim().length !== 0) {
      const newTodo: Todo = {
        text: enteredTodo.trim(),
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
        <button className={Style.closeButton} onClick={props.close}>
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
