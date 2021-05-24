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
  //const [todos, setTodos] = React.useState<string[]>([]);
  //   const [showList, setShowList] = React.useState(true);
  //   const [showInput, setShowInput] = React.useState(false);
  console.log(todos);

  const addNewTodo = (newTodo: string) => {
    // console.log(newTodo);
    // const updatedTodos : string[] = [...todos];
    // updatedTodos.unshift(newTodo);
    // setTodos(updatedTodos);
    dispatch({ type: "DONE", payload: newTodo });
    // setShowList(true);
    // setShowInput(false);
  };

  const onClickAddTodo = () => {
    dispatch({ type: "OPEN_INPUT", payload: "" });
  };

  const onClickCloseInput = () => {
    dispatch({ type: "CLOSE_INPUT", payload: "" });
  };

  return (
    <div className={style.container}>
      {showList && (
        <div>
          <TodoList todos={todos} />
          <button className={style.addButton} onClick={onClickAddTodo}>
            +
          </button>
        </div>
      )}
      {showInput && (
        <TodoInput onSubmit={addNewTodo} onClose={onClickCloseInput} />
      )}
    </div>
  );
};

export default App;
