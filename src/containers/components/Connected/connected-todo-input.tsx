import { connect} from "react-redux";
import { Todo } from '../../App/types';
import TodoInput from '../pure/todo-input';
import { TodosActions } from '../../../store/todosActions';

const mapDispatchToProps = (dispatch: any) => {
    return {
      submit: (newTodo: Todo) => dispatch(TodosActions.submitInput(newTodo)),
      close: () => dispatch(TodosActions.closeInput()),
      dispatch
    };
  };
  
export default connect(null,mapDispatchToProps)(TodoInput);