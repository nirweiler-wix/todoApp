import { connect } from "react-redux";
import { todosState } from "../../store/todosInitialState";
import { Todo } from "../pure/App/types";
import TodoItem from "../pure/todo-item/todo-item";
import { TodosActions } from "../../store/todosActions";
import { Dispatch } from './types'

interface TodoItemOwnProps {
  id: number;
}

const mapStateToProps = (state: todosState, ownProps: TodoItemOwnProps) => {
  let currentTodo: Todo = state.todos.find((todo) => todo.id === ownProps.id)!;

  return { todoItem: currentTodo };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    delete: (todoDelete: Todo) => dispatch(TodosActions.deleteTodo(todoDelete)),
    completed: (completedTodo: Todo) => dispatch(TodosActions.completeTodo(completedTodo)),
  };
};

export const ConnectedTodoItem = connect(mapStateToProps, mapDispatchToProps)(TodoItem);
