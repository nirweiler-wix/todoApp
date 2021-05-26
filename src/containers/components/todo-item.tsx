import React, { FC } from "react";
import { connect } from "react-redux";
import Style from "./todo-item.module.css";
import { todosState } from "../../store/todosReducer";
import Todo from "../App/types";

const TodoItem: React.FC<{ id: number; todos: Todo[] }> = (props) => {
  console.log("nir: todo-item");
  let currentTodo: Todo = props.todos.find((todo) => todo.id === props.id)!;
  return (
    <li key={props.id} className={Style.item}>
      {currentTodo.text}
    </li>
  );
};

// here I need to declare on the index from todoList on OwnProps interface, and than pass it to the item component in Props
// TODO:
// 1. change the props of the todoItem, remove from there the id to here
// 2. create interface for the props and ownprops
const mapStateToProps = (state: todosState) => {
  return { todos: state.todos };
};

export default connect(mapStateToProps)(TodoItem);
//export TodoItem;
