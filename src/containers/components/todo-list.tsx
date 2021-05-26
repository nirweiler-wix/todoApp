import React, { FC } from "react";
import { todosReducer } from "../../store/todosReducer";
import { connect } from "react-redux";
import { todosState } from "../../store/todosReducer";
import TodoItem from "./todo-item";
import Todo from '../App/types'
import Style from "./todo-list.module.css";

const TodoList: React.FC<{todos : Todo[]}> = (props) => {
  console.log("nir: todo-List");
  console.log(props.todos);
  const isEmptyTodoList: boolean = props.todos.length === 0;

  return (
    <div>
      <h1>Todos</h1>
      <ul className={Style.list}>
        {!isEmptyTodoList &&
          props.todos.map((todo) => <TodoItem text={todo.text} />)}
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

const mapStateToProps = (state : todosState) =>
{
    return {todos : state.todos};
}

export default connect(mapStateToProps)(TodoList)
//export default TodoList;
