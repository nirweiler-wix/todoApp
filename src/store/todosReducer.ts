export interface todosState {
  todos: string[];
  showInput: boolean;
}

const initialTodosState = {
  todos: [],
  showInput: false,
};

export type Action = { type: string; payload: string };

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
    default:
      return state;
  }
};
