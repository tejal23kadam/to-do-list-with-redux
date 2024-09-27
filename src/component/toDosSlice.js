import { createSlice } from '@reduxjs/toolkit'

const toDosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
   
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
     state.push(newTodo);
    },
    // toggleComplete: (state, action) => {
    //   const todo = state.find((todo) => todo.id === action.payload);
    //   if (todo) {
    //     todo.completed = !todo.completed;
    //   }
    // },
    updateTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.text = "hello";
     
    },
    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
})

export const { addTodo, updateTodo, deleteTodo } = toDosSlice.actions
export default toDosSlice.reducer