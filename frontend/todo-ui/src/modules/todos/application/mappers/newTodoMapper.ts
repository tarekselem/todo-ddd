import { AddTodoDto } from "../../domain/dtos";
import { AddTodo } from "../models/";
import { IMapperOut } from "@core/common";

export class TodoMapper implements IMapperOut<AddTodoDto, AddTodo> {
  toDTO(source: AddTodo): AddTodoDto {
    throw new Error("Method not implemented.");
  }
}
