import { Todo } from "../components/pure/App/types";

export interface todosState {
    todos : Todo[];
    showInput: boolean;
  }
  
export const initialTodosState = {
    todos: [],
    showInput: false
  };