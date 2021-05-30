import { random } from "lodash";
import React, { BaseSyntheticEvent, FC } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { todosState } from "../../store/todosReducer";
import Todo from '../App/types'
import Style from "./todo-input.module.css";

interface Props {
    submit : (newTodo : Todo) => void,
    close : () => void
}

const TodoInput: React.FC<Props> = (props) => {
    const todos = useSelector<todosState, todosState["todos"]>(
        (state) => state.todos
      );
  
  const [enteredTodo, setEnteredTodo] = React.useState("");

  const inputChangedHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    setEnteredTodo(event.target.value);
  };

  const submitHandler = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    if (enteredTodo.trim().length !== 0) {
        let newTodo : Todo = {text : enteredTodo.trim(), id : Math.random()}
      props.submit(newTodo);
    } else {
      alert("Cannot add empty todo. Please try again");
    }
  };

  const closeInputFormHandler = () => {
    props.close();
  }

  return (
    <div>
      <div className={Style.header}>
        <h1>Add To-do</h1>
        <button className={Style.closeButton} onClick={closeInputFormHandler}>X</button>
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

const mapDispatchToProps = (dispatch: any) => {
    return {
      submit: (newTodo: Todo) => dispatch({ type: "DONE", payload: newTodo }),

      close: () => dispatch({ type: "CLOSE_INPUT" }),
      dispatch
    };
  };
  
export default connect(null,mapDispatchToProps)(TodoInput);