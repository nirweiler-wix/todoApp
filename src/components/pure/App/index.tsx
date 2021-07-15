import * as React from "react";
import style from "./App.module.css";
import { ConnectedTodoList as TodoList} from "../../connected/connected-todo-list";
import { ConnectedTodoInput as TodoInput } from '../../connected/connected-todo-input';
import { connect } from "react-redux";
import { State } from "../../../store/types";
import { TodosActions } from '../../../store/todosActions';
import { AppProps } from './types';

const App: React.FC<AppProps> = (props) => {
  console.log(`show input: ${props.showInput}`)
  return (
    <div className={style.container}>
      {!props.showInput && (
        <div>
          <TodoList />
          <button className={style.addButton} onClick={props.openInput}>
            +
          </button>
        </div>
      )}
      {props.showInput && (
        <TodoInput/>
      )}
    </div>
  );
};


const mapStateToProps = (state : State) => {
    return {
        showInput : state.input.showInput
    }
}

const mapDispatchToProps = (dispatch : any) => {
    return {openInput : () => {dispatch(TodosActions.openInput())}}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);