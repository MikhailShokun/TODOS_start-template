import { createSlice } from "@reduxjs/toolkit";

const todos = createSlice({
  name: "todos",
  initialState: [{ id: new Date().toISOString, text: '', completed: false }],
});

  export default todos.reducer;