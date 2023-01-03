import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001/todos/',
    headers: {'Content-Type': 'application/json'}
});