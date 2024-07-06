// src/components/TodoList.tsx
import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store/reducers";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const todos = useSelector((state: AppState) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
