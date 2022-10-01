import React, {useState} from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    const addTodo = () => {
        if (text.trim().length) {
            setTodos([
                ...todos,
                {
                    id: new Date().toISOString(),
                    text,
                    completed: false,
                },
            ]);
        }
        ;
        setText('');
    }

    const removeTodo = (todoId) => {
        setTodos(todos.filter((todo) => todo.id !== todoId));
    }

    const toggleTodoCompleted = (todoId) => {
        setTodos(
            todos.map(
                todo => {
                    if (todo.id !== todoId) return todo;
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
            )
        )
    }

    return (
        <div className={"App"}>

            < InputField text={text}
                         setText={setText}
                         addTodo={addTodo}/>

            < TodoList todos={todos}
                       removeTodo={removeTodo}
                       toggleTodoCompleted={toggleTodoCompleted} />
        </div>
    );
};

export default App;
