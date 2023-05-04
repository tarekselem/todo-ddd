export interface ITodosRepository {
  getTodos(filters: unknown): ReadonlyArray<unknown>;
  addTodo(newTodo: unknown): void;
  compeleteTodo(todoId: string): void;
  deleteTodo(todoId: string): void;
}
