import { connect } from "react-redux";
import { State } from "../../store/types";
import { TodoList } from "../pure/todo-list/todo-list";

const mapStateToProps = (state: State) => {
  return {
    todos: state.todos.todos
  };
};

export const ConnectedTodoList = connect(mapStateToProps)(TodoList);
