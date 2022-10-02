import React from "react";

function InputField({title, addTodo, setText}) {
  return (
    <label>
      <input value={title} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add todo</button>
    </label>
  );
}

export default InputField;
