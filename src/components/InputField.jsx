import React from "react";

function InputField({title, addTask, setText}) {
  return (
    <label>
      <input value={title} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTask}>Add todo</button>
    </label>
  );
}

export default InputField;
