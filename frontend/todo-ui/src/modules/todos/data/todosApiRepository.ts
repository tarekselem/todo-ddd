import "reflect-metadata";
import { ApiBaseRepository } from "@core/repositories";
import { ITodosRepository } from "@modules/todos/domain/repositories";
import { TodoDTO } from "./dtos";
import { API_ENDPOINT } from "../Providers";

export class TodosApiRepository
  extends ApiBaseRepository<TodoDTO>
  implements ITodosRepository
{
  constructor() {
    super(API_ENDPOINT);
  }

  getTodos(filters: unknown): readonly unknown[] {
    throw new Error("Method not implemented.");
  }
  addTodo(newTodo: unknown): void {
    throw new Error("Method not implemented.");
  }
  compeleteTodo(todoId: string): void {
    throw new Error("Method not implemented.");
  }
  deleteTodo(todoId: string): void {
    throw new Error("Method not implemented.");
  }
}
