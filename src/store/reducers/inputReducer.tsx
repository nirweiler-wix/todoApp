import { AnyAction } from 'redux';
import { OPEN_INPUT, SUBMIT, CLOSE_INPUT } from '../todosActions';
import { initialTodosState } from '../todosInitialState';
import { TodosState, Todo } from '../types';

export const inputReducer = (
  state: TodosState = initialTodosState,
  action: AnyAction
) => {
  switch (action.type) {
    case SUBMIT:
        return { ...state, showInput: false}
    case OPEN_INPUT:
      return { ...state, showInput: true };
    case CLOSE_INPUT:
      return { ...state, showInput: false };
    default:
      return state;
  }
};
