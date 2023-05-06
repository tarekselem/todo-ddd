using System;
using Todos.Application.DTOs;
using Todos.Application.Models;

namespace Todos.Application.Managers
{
	public interface ITodosManager
	{
        IEnumerable<TodoDTO> GetTodos(TodoStatusEnum? statusFilter);
        TodoDTO AddTodo(NewTodoDTO item);
        TodoDTO? CompleteTodo(Guid id);
        TodoDTO? DeleteTodo(Guid id);
    }
}

