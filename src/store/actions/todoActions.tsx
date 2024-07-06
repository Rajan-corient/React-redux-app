export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
import { Todo } from "../reducers/todoReducer";

export type TodowithTitleDescription = Omit<Todo, "id" | "isCompleted">;

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: { todo: TodowithTitleDescription };
  [key: string]: unknown;
}

export interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: { id: number };
  [key: string]: unknown;
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: { id: number };
  [key: string]: unknown;
}

export type TodoActionTypes =
  | AddTodoAction
  | ToggleTodoAction
  | DeleteTodoAction;

export const addTodo = (todo: TodowithTitleDescription): AddTodoAction => ({
  type: ADD_TODO,
  payload: { todo },
});

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const deleteTodo = (id: number): DeleteTodoAction => ({
  type: DELETE_TODO,
  payload: { id },
});
