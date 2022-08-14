import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

export const toDoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.todos = [...state.todos, action.payload];
      console.log(action);
    },

    removeToDo: (state, action) => {
      console.log(action);
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addToDo, removeToDo } = toDoSlice.actions;

export default toDoSlice.reducer;
