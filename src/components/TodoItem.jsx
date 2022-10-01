import React from "react";

function TodoItem({ id, text, completed, toggleTodoCompleted, removeTodo }) {
  return (
    <li key={id}>
      <input type="checkbox" checked={completed} onChange={() => toggleTodoCompleted(id)} />
      <span>{text}</span>
      <span onClick={() => removeTodo(id)} className="delete">
        &times;
      </span>
    </li>
  );
}

export default TodoItem;
