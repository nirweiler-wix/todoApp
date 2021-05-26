import React, { FC } from "react";
import { todosReducer } from "../../store/todosReducer";
import { useSelector, useDispatch } from "react-redux";
import { todosState } from "../../store/todosReducer";
import TodoItem from "./todo-item";
import Style from "./todo-list.module.css";

const TodoList: React.FC = () => {
  const todos = useSelector<todosState, todosState["todos"]>(
    (state) => state.todos
  );
  console.log("nir: todo-List");
  const isEmptyTodoList: boolean = todos.length === 0;
  return (
    <div>
      <h1>Todos</h1>
      <ul className={Style.list}>
        {!isEmptyTodoList &&
          todos.map((todo) => <TodoItem text={todo} />)}
        {isEmptyTodoList && (
          <div className={Style.containerCenter}>
            <img src="../../../public/no-list.png" />
            <p>New todos will apear here</p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
