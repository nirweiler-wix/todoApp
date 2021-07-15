import { createStore } from 'redux';
import { rootReducer } from './reducers/index';
import { todosReducer } from './reducers/todosReducer'

export const store = createStore(rootReducer);

console.log(store.getState())
//export const store = createStore(todosReducer);