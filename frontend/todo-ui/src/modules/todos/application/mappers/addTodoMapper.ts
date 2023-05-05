import { AddTodoDto } from "../../domain/dtos";
import { AddTodo } from "../models";
import { IMapperOut } from "@core/common";

export class AddTodoMapper implements IMapperOut<AddTodoDto, AddTodo> {
  toDTO(source: AddTodo): AddTodoDto {
    return {
      ...source,
      isCompleted: false,
    };
  }
}
