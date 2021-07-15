import { AnyAction } from 'redux';
import { Todo } from '../types';
import { DELETE, COMPLETED, SUBMIT } from '../todosActions';
import { initialTodosState } from '../todosInitialState';
import { TodosState } from '../types';


export const todosReducer = (
  state: TodosState = initialTodosState,
  action: AnyAction
) => {
  switch (action.type) {
    case SUBMIT:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
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
