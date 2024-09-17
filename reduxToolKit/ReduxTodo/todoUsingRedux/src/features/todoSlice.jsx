import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  //store single source of truth

  todos: [
    {
      id: 1,
      text: "hello"
    }
  ]
};
export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      };
      state.todos.push(todo);
    },
    removeTodos: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodos: (state, action) => {
      console.log(action);
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            id: todo.id,
            text: action.payload.text
          };
        } else return todo;
      });
    }
  }
});

export default todoSlice.reducer;
export const { addTodos, removeTodos, editTodos } = todoSlice.actions; // send all reducer individuallly
