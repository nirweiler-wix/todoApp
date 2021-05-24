import { combineReducers } from 'redux';
import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { todosReducer } from './todosReducer'

export interface todosState {
  todos: string[]
}

export interface showListState {
  showList: boolean
}

export interface showInputState {
  showInput: boolean
}

const initialTodosState = {
  todos: []
}

const initialShowListState = {
  showList: true
}

const initialShowInputState = {
  showInput: false
}

export const rootReducer = combineReducers({
  todos: (state = {}, action) => ({})
});

const store = configureStore({
 reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export default store;