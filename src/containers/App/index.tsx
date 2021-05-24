import * as React from "react";
import style from "./App.module.css";
import TodoList from "../components/todo-list";
import TodoInput from "../components/todo-input";
import { useSelector, useDispatch } from "react-redux";
import { todosState, showListState, showInputState } from "../../store/index"; 

const App: React.FC = () => {
  const [todos, setTodos] = React.useState<string[]>([]);
  const [showList, setShowList] = React.useState(true);
  const [showInput, setShowInput] = React.useState(false);
  console.log(todos);

  const addNewTodo = (newTodo: string) => {
    console.log(newTodo);
    const updatedTodos : string[] = [...todos];
    updatedTodos.unshift(newTodo);
    setTodos(updatedTodos);
    setShowList(true);
    setShowInput(false);
  };

  const onClickAddTodo = () => {
    setShowInput(true);
    setShowList(false);
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
      {showInput && <TodoInput onSubmit={addNewTodo} />}
    </div>
  );
};
//try
export default App;
