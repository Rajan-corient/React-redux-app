// src/reducers/todoReducer.ts
import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  TodoActionTypes,
} from "../actions/todoActions";

export interface Todo {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

export type TodoState = Todo[];

const initialState: TodoState = [];

const todoReducer = (
  state = initialState,
  action: TodoActionTypes
): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: Date.now(), ...action.payload.todo, isCompleted: false },
      ];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

export default todoReducer;
