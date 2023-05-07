import { getDueDate } from "@modules/todos/domain";
import { AddTodoDto } from "../../domain/dtos";
import { AddTodo } from "../models";
import { IMapperOut } from "@core/common";

export class AddTodoMapper implements IMapperOut<AddTodoDto, AddTodo> {
  toDTO(source: AddTodo): AddTodoDto {
    const mappedItem: AddTodoDto = {
      description: source.description,
    };

    if (source.dueDateOption) {
      mappedItem.dueDate = getDueDate(source.dueDateOption);
    }

    return mappedItem;
  }
}
