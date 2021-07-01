import { AnyAction } from 'redux';
import { Todo } from '../containers/App/types'
import { OPEN_INPUT, SUBMIT, CLOSE_INPUT, DELETE, COMPLETED } from './todosActions';
import { todosState, initialTodosState } from './todosInitialState';


export const todosReducer = (
  state: todosState = initialTodosState,
  action: AnyAction
) => {
  switch (action.type) {
    case OPEN_INPUT:
      return { ...state, showInput: true };
    case SUBMIT:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        showInput: false,
      };
    case CLOSE_INPUT:
      return { ...state, showInput: false };
    case DELETE:
        const updatedTodos : Todo[] = state.todos.filter(todo => todo.id !== action.payload.id)
        return {...state, todos: updatedTodos}
    case COMPLETED:
        const updatedTodoList : Todo[] = state.todos.filter(todo => todo.id !== action.payload.id)
        let completedTodo = {...action.payload}
        completedTodo.isDone = !completedTodo.isDone;
        updatedTodoList.unshift(completedTodo)
        return {...state, todos : updatedTodoList}
    default:
      return state;
  }
};
