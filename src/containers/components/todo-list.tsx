import React, { FC } from "react";
//import TodoItem from "./todo-item";
import TodoItem from "./Connected/connected-todo-item";
import Todo from '../App/types'
import Style from "./todo-list.module.css";

const TodoList: React.FC<{todos : Todo[]}> = (props) => {
  const isEmptyTodoList: boolean = props.todos.length === 0;

  return (
    <div>
      <h1>Todos</h1>
      <ul className={Style.list}>
        {!isEmptyTodoList &&
          props.todos.map((todo) => 
          <TodoItem id={todo.id} />)}
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
