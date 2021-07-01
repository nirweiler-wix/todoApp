import { AnyAction } from 'redux';
import { Todo } from '../containers/App/types';

export const OPEN_INPUT =  "OPEN_INPUT";
export const SUBMIT = "SUBMIT";
export const CLOSE_INPUT =  "CLOSE_INPUT";
export const DELETE = "DELETE";
export const COMPLETED = "COMPLETED";

export interface todosActions {
    openInput: () => AnyAction;
    submitInput: (todo: Todo) => AnyAction;
    closeInput: () => AnyAction;
    deleteTodo: (todo: Todo) => AnyAction;
    completeTodo: (todo: Todo) => AnyAction;
}

export const TodosActions : todosActions = {
    openInput : (): AnyAction => ({
        type: OPEN_INPUT
    }),
    submitInput : (todo: Todo): AnyAction => ({
        type: SUBMIT, payload: todo
    }),
    closeInput : (): AnyAction => ({
        type: CLOSE_INPUT
    }),
    deleteTodo : (todo: Todo): AnyAction => ({
        type: DELETE, payload: todo
    }),
    completeTodo : (todo: Todo): AnyAction => ({
        type: COMPLETED, payload: todo
    })
};