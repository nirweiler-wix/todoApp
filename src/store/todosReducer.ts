export interface todosState {
  todos: string[];
  showList: boolean;
  showInput: boolean;
}

const initialTodosState = {
  todos: [],
  showList: false,
  showInput: true,
};

type Action = { type: string; payload: string };

export const todosReducer = (
  state: todosState = initialTodosState,
  action: Action
) => {
  switch (action.type) {
    case "OPEN_INPUT":
      return { ...state, showList: false, showInput: true };
    case "DONE":
      return {
        ...state,
        todos: [...state.todos, action.payload],
        showList: true,
        showInput: false,
      };
    case "CLOSE_INPUT":
      return { ...state, showList: true, showInput: false };
    default:
      return state;
  }
};
