import { DueDateOptions } from "@modules/todos/domain/enums";
import { AddTodoDto } from "../../domain/dtos";

export interface AddTodo extends Omit<AddTodoDto, "isCompleted" | "dueDate"> {
  dueDateOption?: DueDateOptions;
}
