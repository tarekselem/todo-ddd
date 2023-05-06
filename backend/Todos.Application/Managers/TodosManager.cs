using System;
using Todos.Application.Models;

namespace Todos.Application.Managers
{
	public class TodosManager: ITodosManager
    {
        private readonly ITodosRepository _todosRepository;

		public TodosManager(ITodosRepository todosRepository)
		{
            this._todosRepository = todosRepository;
		}

        public IEnumerable<Todo> getTodos(TodoStatusEnum? statusFilter)
        {
            if(statusFilter == TodoStatusEnum.completed)
            {
                return this._todosRepository.GetAll().Where(todo => todo.IsCompleted);
            }else if (statusFilter == TodoStatusEnum.Active)
            {
                return this._todosRepository.GetAll().Where(todo => !todo.IsCompleted);
            }

            return this._todosRepository.GetAll();
        }

        public void addTodo(Todo item)
        {
            throw new NotImplementedException();
        }

        public void completeTodo(Guid id)
        {
            throw new NotImplementedException();
        }

        
    }
}

