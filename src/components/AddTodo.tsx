import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  TodowithTitleDescription,
  addTodo,
} from "../store/actions/todoActions";

const AddTodo: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && description) {
      const todo: TodowithTitleDescription = {
        title,
        description,
      };
      dispatch(addTodo(todo));
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
