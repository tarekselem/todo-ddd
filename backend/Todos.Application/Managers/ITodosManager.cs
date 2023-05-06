using System;
using Todos.Application.Models;

namespace Todos.Application.Managers
{
	public interface ITodosManager
	{
        IEnumerable<Todo> getTodos(TodoStatusEnum? statusFilter);
		void addTodo(Todo item);
		void completeTodo(Guid id);
    }
}

