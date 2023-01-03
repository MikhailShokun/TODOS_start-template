import {createSlice} from "@reduxjs/toolkit";
import {fetchTodos} from "./asyncActions";

const errorHelper = (state, action)=> {
    state.status = "rejected";
    state.error = action.payload;
}

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todoList: [],
        status: null,
        error: null
    },
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                completed: false,
            })
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        toggleTodoCompleted(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchTodos.fulfilled, (state, action)=> {
                state.status = "fulfilled";
                state.todoList = action.payload;
            })
            .addCase(fetchTodos.rejected, errorHelper)
    }
});

export const {addTodo, removeTodo, toggleTodoCompleted} = todoSlice.actions;
export default todoSlice.reducer;