using System;
using Todos.Application.DTOs;
using Todos.Application.Models;

namespace Todos.Application.Managers
{
	public interface ITodosManager
	{
        IEnumerable<TodoDto> GetTodos(TodoStatusEnum? statusFilter);
        TodoDto AddTodo(NewTodoDto item);
        TodoDto? CompleteTodo(Guid id);
        TodoDto? DeleteTodo(Guid id);
    }
}

