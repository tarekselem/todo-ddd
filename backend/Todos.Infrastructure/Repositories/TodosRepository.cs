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
            this._dBContext.Todos.Add(item);
        }

        public Todo? GetById(Guid id)
        {
            return this._dBContext.Todos.FirstOrDefault(item => item.Id == id);
        }

        public Todo? Remove(Guid id)
        {
            var itemToDelete = this._dBContext.Todos.FirstOrDefault(item => item.Id == id);

            if (itemToDelete == null) return null;

             this._dBContext.Todos.Remove(itemToDelete);

            return itemToDelete;
        }

        public void Update(Todo item)
        {
            throw new NotImplementedException();
        }
    }
}

