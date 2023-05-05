import { AddTodoDto } from "../../domain/dtos";

export interface AddTodo extends Omit<AddTodoDto, "isCompleted"> {}
