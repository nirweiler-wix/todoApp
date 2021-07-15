import { TodosState } from './types';
  
export const initialTodosState : TodosState = {
    todos: [{text: 'Hello', id:1, isDone: false}],
    showInput: false
};