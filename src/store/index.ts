import { combineReducers, createStore } from 'redux';
import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { todosReducer } from './todosReducer'

// export const rootReducer = combineReducers({
//   todos: todosReducer
// });

// const store = configureStore({
//  reducer: rootReducer
// });

const store = createStore(todosReducer);

//export type RootState = ReturnType<typeof rootReducer>;
//export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
//export type AppDispatch = typeof store.dispatch;

export default store;