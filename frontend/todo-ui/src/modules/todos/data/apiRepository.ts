import { ApiBaseRepository } from "@core/common";
import { ITodosRepository } from "../application/repositories";
import { TodoMapper } from "../application/mappers";
import { Todo } from "../application/models";

import { TodoDTO } from "../domain/dtos";
import { API_ENDPOINT } from "../Providers";

export class TodosApiRepository
  extends ApiBaseRepository<TodoDTO>
  implements ITodosRepository
{
  constructor() {
    super(API_ENDPOINT);
  }

  getTodos(filters: unknown): Promise<Todo[]> {
    const mapper = new TodoMapper();
    return this.getAll({ params: filters }).then((data) =>
      mapper.collectionToDomain(data)
    );
  }

  addTodo(newTodo: unknown): void {
    throw new Error("Method not implemented.");
  }

  completeTodo(todoId: string): void {
    throw new Error("Method not implemented.");
  }

  deleteTodo(todoId: string): void {
    throw new Error("Method not implemented.");
  }
}
