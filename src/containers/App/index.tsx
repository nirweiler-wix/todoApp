import * as React from "react";
import style from "./App.module.css";
import TodoList from "../components/todo-list";
import TodoInput from "../components/todo-input";
import { useSelector, useDispatch } from "react-redux";
import { todosState } from "../../store/todosReducer";

const App: React.FC = () => {
  const todos = useSelector<todosState, todosState["todos"]>(
    (state) => state.todos
  );
  const showList = useSelector<todosState, todosState["showList"]>(
    (state) => state.showList
  );
  const showInput = useSelector<todosState, todosState["showInput"]>(
    (state) => state.showInput
  );
  const dispatch = useDispatch();
  console.log(todos);

  const onClickAddTodo = () => {
    dispatch({ type: "OPEN_INPUT"});
  };

  return (
    <div className={style.container}>
      {showList && (
        <div>
          <TodoList/>
          <button className={style.addButton} onClick={onClickAddTodo}>
            +
          </button>
        </div>
      )}
      {showInput && (
        <TodoInput/>
      )}
    </div>
  );
};

export default App;
