import React, { FC } from "react";
import { connect } from "react-redux";
import Style from "./todo-item.module.css";
import { todosState } from "../../store/todosReducer";
import Todo from "../App/types";

interface OwnProps {
    id : number
}

interface ItemProps {
    todoItem : Todo
}

const TodoItem: React.FC<ItemProps> = (props) => {
  console.log("nir: todo-item");
  //let currentTodo: Todo = props.todos.find((todo) => todo.id === props.id)!;
  return (
    <li key={props.todoItem.id} className={Style.item}>
      {props.todoItem.text}
    </li>
  );
};

const mapStateToProps = (state : todosState ,ownProps: OwnProps) => {
    let currentTodo: Todo = state.todos.find((todo) => todo.id === ownProps.id)!;

  return { todoItem : currentTodo };
};

export default connect(mapStateToProps)(TodoItem);
//export TodoItem;
