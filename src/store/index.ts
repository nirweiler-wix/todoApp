import { combineReducers, createStore } from 'redux';
import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { todosReducer } from './todosReducer'

const store = createStore(todosReducer);

export default store;