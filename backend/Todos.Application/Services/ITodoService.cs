using Todos.Application.DTOs;
using Todos.Application.Models;

namespace Todos.Application.Services
{
    public interface ITodoService
    {
        IEnumerable<TodoDto> GetTodos(TodoStatusEnum? statusFilter);
        TodoDto AddTodo(NewTodoDto item);
        TodoDto? CompleteTodo(Guid id);
        TodoDto? DeleteTodo(Guid id);
    }
}

