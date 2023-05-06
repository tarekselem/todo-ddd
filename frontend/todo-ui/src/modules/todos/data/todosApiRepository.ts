import { ApiBaseRepository } from "@core/common";
import { TodoDTO } from "../domain/dtos";
import { ITodosRepository } from "../application/repositories";
import { TodoMapper, AddTodoMapper } from "../application/mappers";
import { AddTodo, Todo, UpdateTodo } from "../application/models";

export class TodosApiRepository
  extends ApiBaseRepository<TodoDTO>
  implements ITodosRepository
{
  private readonly _todoMapper;
  private readonly _endpoint;

  constructor(endpoint: string) {
    super(endpoint);
    this._endpoint = endpoint;
    this._todoMapper = new TodoMapper();
  }

  getTodos = (filter: unknown): Promise<Todo[]> => {
    return super
      .getAll({ params: filter })
      .then((data) => this._todoMapper.collectionToDomain(data));
  };

  addTodo = (newTodo: AddTodo): Promise<Todo> => {
    const addTodoMapper = new AddTodoMapper();

    return super
      .post<AddTodo>(addTodoMapper.toDTO(newTodo))
      .then((data) => this._todoMapper.singleToDomain(data));
  };

  completeTodo = (todoId: string): Promise<Todo> => {
    return super
      .patch<UpdateTodo>(`${this._endpoint}/${todoId}/MarkAsCompleted`)
      .then((data) => this._todoMapper.singleToDomain(data));
  };

  deleteTodo = (todoId: string) => super.delete(todoId);
}
