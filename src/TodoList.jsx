import React, { useContext } from "react";
import { TodoContext } from "./context";

const TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);

  return (
    <div className="todo-list">
      {state.todos.map((todo) => (
        <div className="todo-item" key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
          />
          <span>{todo.text}</span>
          <button
            onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
