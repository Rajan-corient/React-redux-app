// src/components/TodoItem.tsx
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../store/actions/todoActions";
import { Todo } from "../store/reducers/todoReducer";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        style={{
          textDecoration: todo.isCompleted ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.title}
      </span>
      <div>{todo.title}</div>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </li>
  );
};

export default TodoItem;
