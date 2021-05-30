import { connect} from "react-redux";
import Todo from '../../App/types'
import TodoInput from '../todo-input'

const mapDispatchToProps = (dispatch: any) => {
    return {
      submit: (newTodo: Todo) => dispatch({ type: "DONE", payload: newTodo }),

      close: () => dispatch({ type: "CLOSE_INPUT" }),
      dispatch
    };
  };
  
export default connect(null,mapDispatchToProps)(TodoInput);