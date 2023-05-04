import { Todo } from "../models/todo";

export interface ITodosRepository {
  getTodos(filters: unknown): ReadonlyArray<Todo>;
  addTodo(newTodo: unknown): void;
  completeTodo(todoId: string): void;
  deleteTodo(todoId: string): void;
}
