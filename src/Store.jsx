// CONFIGURACION DEL STORE Y REDUX TOOLKIT
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './components/Slice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;
