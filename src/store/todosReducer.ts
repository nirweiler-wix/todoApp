import Todo from '../containers/App/types'

export interface todosState {
  //todos: string[];
  todos : Todo[];
  showInput: boolean;
}

const initialTodosState = {
  todos: [{id : 1, text : "hello"}],
  showInput: false,
};

export type Action = { type: string; payload: Todo };

export const todosReducer = (
  state: todosState = initialTodosState,
  action: Action
) => {
  switch (action.type) {
    case "OPEN_INPUT":
      return { ...state, showInput: true };
    case "DONE":
      return {
        ...state,
        todos: [...state.todos, action.payload],
        showInput: false,
      };
    case "CLOSE_INPUT":
      return { ...state, showInput: false };
    case "DELETE":
        const updatedTodos : Todo[] = state.todos.filter(todo => todo.id !== action.payload.id)
        return {...state, todos: updatedTodos}
    default:
      return state;
  }
};
