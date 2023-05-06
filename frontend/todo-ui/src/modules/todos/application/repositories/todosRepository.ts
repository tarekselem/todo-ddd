import { AddTodo } from "../models";
import { Todo } from "../models/todo";

export interface ITodosRepository {
  getTodos(filters: unknown): Promise<Todo[]>;
  addTodo(newTodo: AddTodo): Promise<Todo>;
  completeTodo(todoId: string): Promise<Todo>;
  deleteTodo(todoId: string): Promise<void>;
}
