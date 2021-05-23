import React, { FC } from "react";
import TodoItem from "./todo-item";
import Style from "./todo-list.module.css";

const TodoList: React.FC<{ todos: string[] }> = (props) => {
  console.log("nir: todo-List");
  return (
      <div>
      <h1>Todos</h1>
    <ul className={Style.list}>
      {props.todos.map((todo) => (
        <TodoItem text={todo} />
      ))}
    </ul>
    </div>
  );
};

export default TodoList;
