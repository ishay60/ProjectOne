import React from "react";
import "./styles/TodoList.css";
const TodoList = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`todo-item ${
            todo.completed ? "completed" : "not-completed"
          }`}
        >
          {todo.title}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
