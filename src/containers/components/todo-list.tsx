import React, { FC } from "react";
import { isPropertySignature } from "typescript";
import TodoItem from "./todo-item";
import "./todo-list.css";

const TodoList: React.FC<{ todos: string[] }> = (props) => {
  console.log("nir: todo-List");
  let index: number = 0;
  return (
    <ul>
      {props.todos.map((todo) => {
          console.log(todo);
        <TodoItem text={todo}>{todo}</TodoItem>
      })}
      <TodoItem text={"check simple text"} />
    </ul>
  );
};

export default TodoList;
