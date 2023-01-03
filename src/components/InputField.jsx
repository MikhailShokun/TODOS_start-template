import React from "react";

function InputField({text, addTodo, setText}) {
  return (
    <label>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add todo</button>
    </label>
  );
}

export default InputField;
