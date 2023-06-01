import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { TodoProvider } from "./context";
import "./App.css";
const App = () => {
  return (
    <TodoProvider>
      <div className="container">
        <h1>Todo App</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
