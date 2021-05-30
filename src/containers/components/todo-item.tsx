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
    delete : (newTodo : Todo) => void
}

interface DispatchProps {
    type : string
    payload : Todo
}

const TodoItem: React.FC<ItemProps> = (props) => {
    const onDeleteHandler = () => {
        props.delete(props.todoItem);
    }

  return (
    <div className={Style.itemContainer}>
    <li key={props.todoItem.id} className={Style.item}>
      {props.todoItem.text}
    </li>
    <button className={Style.closeButton} onClick={onDeleteHandler}>X</button>
    </div>
  );
};

const mapStateToProps = (state : todosState ,ownProps: OwnProps) => {
    let currentTodo: Todo = state.todos.find((todo) => todo.id === ownProps.id)!;

  return { todoItem : currentTodo };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
      delete: (todoDelete: Todo) => dispatch({ type: "DELETE", payload: todoDelete }),
      dispatch
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoItem);
