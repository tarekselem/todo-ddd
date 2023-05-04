import { TodoDTO } from "../../domain/dtos";
import { Todo } from "../models/todo";
import { IMapperIn } from "@core/common";

export class TodoMapper implements IMapperIn<TodoDTO, Todo> {
  toDomain(source: TodoDTO): Todo {
    throw new Error("Method not implemented.");
  }
}
