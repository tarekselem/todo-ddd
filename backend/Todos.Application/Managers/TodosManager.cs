using System;
using Todos.Application.Models;
using Todos.Application.DTOs;

namespace Todos.Application.Managers
{
	public class TodosManager: ITodosManager
    {
        private readonly ITodosRepository _todosRepository;

		public TodosManager(ITodosRepository todosRepository)
		{
            this._todosRepository = todosRepository;
		}

        public IEnumerable<TodoDTO> GetTodos(TodoStatusEnum? statusFilter)
        {
            if(statusFilter == TodoStatusEnum.completed)
            {
                return (IEnumerable<TodoDTO>)this._todosRepository.GetAll().Where(todo => todo.IsCompleted);
            }else if (statusFilter == TodoStatusEnum.Active)
            {
                return (IEnumerable<TodoDTO>)this._todosRepository.GetAll().Where(todo => !todo.IsCompleted);
            }

            return (IEnumerable<TodoDTO>)this._todosRepository.GetAll();
        }

        public TodoDTO AddTodo(NewTodoDTO item)
        {
            var newTodo = new Todo
            {
                Id = Guid.NewGuid(),
                IsCompleted = false,
                Description = item.Description,
                DueDate = item.DueDate
            };

            this._todosRepository.Add(newTodo);
            return (TodoDTO)newTodo;
        }

        public TodoDTO? CompleteTodo(Guid id)
        {
            var todoToUpdate = this._todosRepository.GetById(id);

            if (todoToUpdate == null) return null;

            todoToUpdate.IsCompleted = true;
            return (TodoDTO)todoToUpdate;
        }

        public TodoDTO? DeleteTodo(Guid id)
        {
            var todoToDelete = this._todosRepository.Remove(id);

            if (todoToDelete == null) return null;

            return (TodoDTO)todoToDelete;
        }

    }
}

