import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleTaskStatus: (state, action) => {
      const taskId = action.payload;
      const task = state.tasks.find(task => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    resetTasks: state => {
      state.tasks = [];
    },
  },
});

export const { addTask, toggleTaskStatus, deleteTask, resetTasks } = todosSlice.actions;

export default todosSlice.reducer;