import { TodoDTO } from "../../domain/dtos";
import { Todo } from "../models/todo";
import { IMapperIn } from "@core/common";

export class TodoMapper implements IMapperIn<TodoDTO, Todo> {
  singleToDomain(source: Readonly<TodoDTO>): Todo {
    return { ...source };
  }

  collectionToDomain(source: ReadonlyArray<TodoDTO>): Todo[] {
    return [...source];
  }
}
