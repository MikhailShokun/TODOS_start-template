import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";



// error helper
// const setError = (state, action) => {
//     state.status = 'rejected';
//     state.error = action.payload;
// }

// Slice
const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [],
        status: null,
        error: null
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload)
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        toggleTodoCompleted(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        }
    }
    // extraReducers: {
    //     [fetchTodos.pending]: (state) => {
    //         state.status = "loading";
    //         state.error = null;
    //     },
    //     [fetchTodos.fulfilled]: (state, action) => {
    //         state.status = "resolved";
    //         state.todos = action.payload;
    //     },
    //     [fetchTodos.rejected]: setError,
    //     [deleteTodo.rejected]: setError,
    //     [toggleStatus.rejected]: setError
    // }
});

export const {addTodo, removeTodo, toggleTodoCompleted} = todoSlice.actions;
export default todoSlice.reducer;