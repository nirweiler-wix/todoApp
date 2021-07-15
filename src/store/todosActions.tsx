import { AnyAction } from 'redux';
import { Todo, TodosActionsTypes } from './types';

export const OPEN_INPUT =  "OPEN_INPUT";
export const SUBMIT = "SUBMIT";
export const CLOSE_INPUT =  "CLOSE_INPUT";
export const DELETE = "DELETE";
export const COMPLETED = "COMPLETED";


export const TodosActions : TodosActionsTypes = {
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