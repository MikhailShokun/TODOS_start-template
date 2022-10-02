import React, {useState, useEffect} from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import {useDispatch, useSelector} from "react-redux";
import {addNewTodo, fetchTodos} from "./app/todoSlice";
import Spinner from "./components/spinner/SpinnerComponent";

const App = () => {
    const {status, error} = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [title, setText] = useState('');

    useEffect(()=>{
        dispatch(fetchTodos())
    }, [])

    const addTask = () => {
        if (title.trim().length) {
            dispatch(addNewTodo(title));
            setText('');
        }
    }

    return (
        <div className={"App"}>

            < InputField title={title}
                         setText={setText}
                         addTodo={addTask}/>

            {status === 'loading' && <Spinner /> }
            {error  && <h2>Error: {error}</h2> }

            < TodoList/>
        </div>
    );
};

export default App;
