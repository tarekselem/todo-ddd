using System;
using Todos.Application;
using Todos.Application.Common;
using Todos.Application.Models;


namespace Todos.Infrastructure.Repositories
{
	public class TodosRepository: ITodosRepository
    {
        private readonly IDBContext _dBContext;
		public TodosRepository(IDBContext dBContext)
		{
            this._dBContext = dBContext;
		}

        public IEnumerable<Todo> GetAll()
        {
            return this._dBContext.Todos;
        }

        public void Add(Todo item)
        {
            throw new NotImplementedException();
        }

        public Todo Find(Guid id)
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

