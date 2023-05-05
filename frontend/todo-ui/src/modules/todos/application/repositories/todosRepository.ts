import { Todo } from "../models/todo";

export interface ITodosRepository {
  getTodos(filters: unknown): Promise<Todo[]>;
  addTodo(newTodo: unknown): void;
  completeTodo(todoId: string): void;
  deleteTodo(todoId: string): void;
}
