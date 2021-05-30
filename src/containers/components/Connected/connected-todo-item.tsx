import { connect } from "react-redux";
import { todosState } from "../../../store/todosReducer";
import Todo from "../../App/types";
import TodoItem from '../todo-item'

interface OwnProps {
    id : number
}

const mapStateToProps = (state : todosState ,ownProps: OwnProps) => {
    let currentTodo: Todo = state.todos.find((todo) => todo.id === ownProps.id)!;

  return { todoItem : currentTodo };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
      delete: (todoDelete: Todo) => dispatch({ type: "DELETE", payload: todoDelete }),
      completed : (completedTodo : Todo) => dispatch({type: "COMPLETED", payload: completedTodo}),
      dispatch
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoItem);