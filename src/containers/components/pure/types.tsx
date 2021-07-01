import Todo from '../../App/types';

export interface TodoListProps {
    todos: Todo[];
  }

export interface ItemProps {
    todoItem : Todo
    delete : (newTodo : Todo) => void
    completed : (completedTodo : Todo) => void
}

export interface InputProps {
    submit : (newTodo : Todo) => void,
    close : () => void
}