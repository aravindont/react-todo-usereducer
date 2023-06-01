import React, { useState, useContext } from "react";
import { TodoContext } from "./context";

const TodoForm = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: { id: Date.now(), text, completed: false },
    });
    setText("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a todo..."
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
