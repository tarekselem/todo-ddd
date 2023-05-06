import { Todo, AddTodo } from "../models";

export interface ITodosRepository {
  getTodos(filters: unknown): Promise<Todo[]>;
  addTodo(newTodo: AddTodo): Promise<Todo>;
  completeTodo(todoId: string): Promise<Todo>;
  deleteTodo(todoId: string): Promise<void>;
}
