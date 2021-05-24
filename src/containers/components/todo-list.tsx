import React, { FC } from "react";
import { todosReducer } from "../../store/todosReducer";
import TodoItem from "./todo-item";
import Style from "./todo-list.module.css";

const TodoList: React.FC<{ todos: string[] }> = (props) => {
  console.log("nir: todo-List");
  const isEmptyTodoList: boolean = props.todos.length === 0;
  return (
    <div>
      <h1>Todos</h1>
      <ul className={Style.list}>
        {!isEmptyTodoList &&
          props.todos.map((todo) => <TodoItem text={todo} />)}
        {isEmptyTodoList && (
          <div>
            <img src="../../../public/no-list.png" />
            <p>Todos you add will apear here</p>
          </div>
        )}
      </ul>
    </div>
  );
};

export default TodoList;
