import { connect } from "react-redux";
import { todosState } from "../../../store/todosInitialState";
import TodoList from "../pure/todo-list";

const mapStateToProps = (state: todosState) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(TodoList);
