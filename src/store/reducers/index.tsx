import { combineReducers } from 'redux';
import { todosReducer } from './todosReducer';
import { inputReducer } from './inputReducer';

export const rootReducer = combineReducers({
    todos: todosReducer,
    input: inputReducer
});