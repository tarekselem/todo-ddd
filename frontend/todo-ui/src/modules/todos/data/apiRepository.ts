import { ApiBaseRepository } from "@core/common";
import { TodoDTO } from "../domain/dtos";
import { ITodosRepository } from "../application/repositories";
import { TodoMapper, AddTodoMapper } from "../application/mappers";
import { AddTodo, Todo } from "../application/models";

import { API_ENDPOINT } from "../Providers";

export class TodosApiRepository
  extends ApiBaseRepository<TodoDTO>
  implements ITodosRepository
{
  private readonly _todoMapper;

  constructor() {
    super(API_ENDPOINT);
    this._todoMapper = new TodoMapper();
  }

  getTodos(filter: unknown): Promise<Todo[]> {
    return super
      .getAll({ params: filter })
      .then((data) => this._todoMapper.collectionToDomain(data));
  }

  addTodo(newTodo: AddTodo): Promise<Todo> {
    const addTodoMapper = new AddTodoMapper();

    return super
      .post<AddTodo>(addTodoMapper.toDTO(newTodo))
      .then((data) => this._todoMapper.singleToDomain(data));
  }

  completeTodo(todoId: string): void {
    throw new Error("Method not implemented.");
  }

  deleteTodo(todoId: string): void {
    throw new Error("Method not implemented.");
  }
}
