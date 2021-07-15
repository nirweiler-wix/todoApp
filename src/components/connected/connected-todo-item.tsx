import { connect } from "react-redux";
import { State } from "../../store/types";
import { Todo } from "../../store/types";
import TodoItem from "../pure/todo-item/todo-item";
import { TodosActions } from "../../store/todosActions";
import { Dispatch } from '../../store/types';

interface TodoItemOwnProps {
  id: number;
}

const mapStateToProps = (state: State, ownProps: TodoItemOwnProps) => {
  let currentTodo: Todo = state.todos.todos.find((todo : Todo) => todo.id === ownProps.id)!;

  return { todoItem: currentTodo };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    delete: (todoDelete: Todo) => dispatch(TodosActions.deleteTodo(todoDelete)),
    completed: (completedTodo: Todo) => dispatch(TodosActions.completeTodo(completedTodo)),
  };
};

export const ConnectedTodoItem = connect(mapStateToProps, mapDispatchToProps)(TodoItem);
