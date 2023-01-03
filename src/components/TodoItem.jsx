import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoCompleted } from "../app/todos/todoSlice";

function TodoItem({ id, text, completed }) {
  const dispatch = useDispatch();

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTodoCompleted({ id }))} />
      <span>{text}</span>
      <span onClick={() => dispatch(removeTodo({ id }))} className="delete">
        &times;
      </span>
    </li>
  );
}

export default TodoItem;
