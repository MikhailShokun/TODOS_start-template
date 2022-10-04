import {useState} from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import {addTodo} from "./app/todos/todoSlice";
import {useAppDispatch} from "./app/hooks";
// import Spinner from "./components/spinner/SpinnerComponent";

const App = () => {
    // const {status, error} = useSelector(state => state.todos);
    const dispatch = useAppDispatch();
    const [title, setText] = useState('');

    // useEffect(()=>{
    //     dispatch(fetchTodos())
    // }, [])

    const addTask = () => {
        if (title.trim().length) {
            dispatch(addTodo(title));
            setText('');
        }
    }

    return (
        <div className={"App"}>
            <h1>Todo TK with TS</h1>

            < InputField title={title}
                         setText={setText}
                         addTask={addTask}/>

            {/*{status === 'loading' && <Spinner /> }*/}
            {/*{error  && <h2>Error: {error}</h2> }*/}

            < TodoList/>
        </div>
    );
};

export default App;
