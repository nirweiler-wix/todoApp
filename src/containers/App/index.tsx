import * as React from "react";
import style from "./App.module.css";
import TodoList from "../components/todo-list";
import TodoInput from "../components/todo-input";
import { connect } from "react-redux";
import { todosState } from "../../store/todosReducer";

interface Props {
    showInput : boolean,
    openInput : () => void
}

const App: React.FC<Props> = (props) => {

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
    return {openInput : () => {dispatch({type : "OPEN_INPUT"})}}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);