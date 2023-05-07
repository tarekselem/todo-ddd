import { TodoDTO } from "../../domain/dtos";
import { Todo } from "../models/todo";
import { IMapperIn } from "@core/common";

export class TodoMapper implements IMapperIn<TodoDTO, Todo> {
  singleToDomain(source: Readonly<TodoDTO>): Todo {
    return this.mapItem(source);
  }

  collectionToDomain(source: ReadonlyArray<TodoDTO>): Todo[] {
    return source.map((item) => this.mapItem(item));
  }

  private mapItem(source: Readonly<TodoDTO>): Todo {
    return {
      ...source,
      dueDate: source.dueDate
        ? new Date(source.dueDate).toLocaleDateString("de", {
            dateStyle: "full",
          })
        : "",
    };
  }
}
