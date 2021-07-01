import { connect } from "react-redux";
import { todosState } from "../../../store/todosInitialState";
import Todo from "../../App/types";
import TodoItem from '../pure/todo-item';
import { TodosActions } from '../../../store/todosActions';

interface OwnProps {
    id : number
}

const mapStateToProps = (state : todosState ,ownProps: OwnProps) => {
    let currentTodo: Todo = state.todos.find((todo) => todo.id === ownProps.id)!;

  return { todoItem : currentTodo };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
      delete: (todoDelete: Todo) => dispatch(TodosActions.deleteTodo(todoDelete)),
      completed : (completedTodo : Todo) => dispatch(TodosActions.completeTodo(completedTodo)),
      dispatch
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoItem);