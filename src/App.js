import React, {useEffect, useState} from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import {useDispatch} from "react-redux";
import {addTodo} from "./app/todos/todoSlice";
import {fetchTodos} from "./app/todos/asyncActions";

const App = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const addTask = () => {
        dispatch(addTodo({text}));
        setText('');
    }

    useEffect(()=> {
     dispatch(fetchTodos());
    }, [dispatch])

    return (
        <div className={"App"}>

            < InputField text={text}
                         setText={setText}
                         addTodo={addTask}/>

            < TodoList/>
        </div>
    );
};

export default App;
