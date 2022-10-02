import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

// asyncThunk
export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function (_, {rejectWithValue}) {
        try {
            const response = await fetch('http://localhost:3003/todos');

            if (!response.ok) {
                throw new Error('Server error!');
            }

            const data = await response.json();

            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async function (id, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`http://localhost:3003/todos/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error(`Can't delete task`);
            }

            dispatch(removeTodo({id}))

        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

export const toggleStatus = createAsyncThunk(
    'todos/toggleStatus',
    async function (id, {rejectWithValue, dispatch, getState}) {
        const todo = getState().todos.todos.find(todo => todo.id === id)
        try {
            const response = await fetch(`http://localhost:3003/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    completed: !todo.completed
                })
            });

            if (!response.ok) {
                throw new Error(`Can't toggle task status`);
            }
            // console.log(response)

            dispatch(toggleTodoCompleted({id}))

        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
);

export const addNewTodo = createAsyncThunk(
    'todos/addNewTodo',
    async function (text, {rejectWithValue, dispatch}) {
        try {
            const todo = {
                title: text,
                userId: 1,
                completed: false
            };

            const response = await fetch(`http://localhost:3003/todos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(todo)
            });

            if (!response.ok) {
                throw new Error(`Can't add new task`);
            }
            const data = await response.json();
            dispatch(addTodo(data))

        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

// error helper
const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
}

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
    },
    extraReducers: {
        [fetchTodos.pending]: (state) => {
            state.status = "loading";
            state.error = null;
        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.todos = action.payload;
        },
        [fetchTodos.rejected]: setError,
        [deleteTodo.rejected]: setError,
        [toggleStatus.rejected]: setError
    }
});

export const {addTodo, removeTodo, toggleTodoCompleted} = todoSlice.actions;
export default todoSlice.reducer;