import { connect} from "react-redux";
import { Todo } from '../pure/App/types';
import { TodoInput } from '../pure/todo-input/todo-input';
import { TodosActions } from '../../store/todosActions';
import { Dispatch } from './types';

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
      submit: (newTodo: Todo) => dispatch(TodosActions.submitInput(newTodo)),
      close: () => dispatch(TodosActions.closeInput())
    };
  };

export const ConnectedTodoInput = connect(null,mapDispatchToProps)(TodoInput);
 