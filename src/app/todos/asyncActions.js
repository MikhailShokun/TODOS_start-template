import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/todos/',
    headers: {'Content-Type': 'application/json'}
});

export const fetchTodos = createAsyncThunk(
    "todos/fetchTodos",
    async function (_, {rejectWithValue}) {
        try {
            const response = await axiosInstance();
            const data = await response.data;
            // console.log(data)
            return data;
        } catch (e) {
            return rejectWithValue(e.message)
        }

    }
)