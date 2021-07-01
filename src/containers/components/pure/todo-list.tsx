import React, { FC } from "react";
import TodoItem from "../Connected/connected-todo-item";
import { Todo } from "../../App/types";
import Style from "./todo-list.module.css";
import { TodoListProps } from "./types";

const TodoList: React.FC<TodoListProps> = (props) => {
  const completedTodos: Todo[] = props.todos.filter(
    (todo) => todo.isDone === true
  );
  const uncompletedTodos: Todo[] = props.todos.filter(
    (todo) => todo.isDone === false
  );

  const isEmptyTodoList: boolean = uncompletedTodos.length === 0;
  const isEmptyCompletedTodos: boolean = completedTodos.length === 0;

  return (
    <div>
      <h1>Todos</h1>
      <ul className={Style.list}>
        {!isEmptyTodoList &&
          uncompletedTodos.map((todo) => <TodoItem id={todo.id} />)}
        {!isEmptyCompletedTodos &&
          completedTodos.map((todo) => <TodoItem id={todo.id} />)}
        {isEmptyTodoList && isEmptyCompletedTodos && (
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
