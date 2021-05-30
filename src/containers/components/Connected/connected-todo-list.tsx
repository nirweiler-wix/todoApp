import { connect } from "react-redux";
import { todosState } from "../../../store/todosReducer";
import TodoList from '../todo-list'

const mapStateToProps = (state : todosState) =>
{
    return {todos : state.todos};
}

export default connect(mapStateToProps)(TodoList)