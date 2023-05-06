using System;
using Todos.Application;
using Todos.Domain.Entitties;

namespace Todos.Infrastructure.Repositories
{
	public class TodosRepository: ITodosRepository
    {
		public TodosRepository()
		{
		}

        public void Add(Todo item)
        {
            throw new NotImplementedException();
        }

        public Todo Find(Guid id)
        {
            throw new NotImplementedException();
        }

        public ICollection<Todo> GetAll()
        {
            throw new NotImplementedException();
        }

        public Todo Remove(string key)
        {
            throw new NotImplementedException();
        }

        public void Update(Todo item)
        {
            throw new NotImplementedException();
        }
    }
}

