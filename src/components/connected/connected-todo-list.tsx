import { connect } from "react-redux";
import { todosState } from "../../store/todosInitialState";
import { TodoList } from "../pure/todo-list/todo-list";

const mapStateToProps = (state: todosState) => {
  return {
    todos: state.todos,
  };
};

export const ConnectedTodoList = connect(mapStateToProps)(TodoList);
