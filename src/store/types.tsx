import { AnyAction } from 'redux'
import { store } from '.'

export interface TodosActionsTypes {
    openInput: () => AnyAction;
    submitInput: (todo: Todo) => AnyAction;
    closeInput: () => AnyAction;
    deleteTodo: (todo: Todo) => AnyAction;
    completeTodo: (todo: Todo) => AnyAction;
}

export interface Todo {
    text : string;
    id : number;
    isDone : boolean;
}

export interface TodosState {
    todos : Todo[];
    showInput: boolean;
}

export interface State {
    todos: TodosState,
    input: TodosState
}

export type Dispatch = typeof store.dispatch;