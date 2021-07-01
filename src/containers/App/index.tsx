import * as React from "react";
import style from "./App.module.css";
import TodoList from "../components/Connected/connected-todo-list";
import TodoInput from '../components/Connected/connected-todo-input';
import { connect } from "react-redux";
import { todosState } from "../../store/todosInitialState";
import { TodosActions } from '../../store/todosActions';
import { AppProps } from './types';

const App: React.FC<AppProps> = (props) => {

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


const mapStateToProps = (state : todosState) => {
    console.log(state);
    return {
        showInput : state.showInput
    }
}

const mapDispatchToProps = (dispatch : any) => {
    return {openInput : () => {dispatch(TodosActions.openInput())}}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);