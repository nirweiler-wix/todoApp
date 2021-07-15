import { connect} from "react-redux";
import { Todo } from '../../store/types';
import { TodoInput } from '../pure/todo-input/todo-input';
import { TodosActions } from '../../store/todosActions';
import { Dispatch } from '../../store/types';

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
      submit: (newTodo: Todo) => dispatch(TodosActions.submitInput(newTodo)),
      close: () => dispatch(TodosActions.closeInput())
    };
  };

export const ConnectedTodoInput = connect(null,mapDispatchToProps)(TodoInput);
 