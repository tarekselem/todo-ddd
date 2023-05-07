using System;
using AutoMapper;
using Todos.Application;
using Todos.Application.Common;
using Todos.Application.DTOs;
using Todos.Application.Models;


namespace Todos.Infrastructure.Repositories
{
	public class TodosRepository: ITodosRepository
    {
        private readonly IDBContext _dBContext;
        private readonly IMapper _mapper;

        public TodosRepository(IDBContext dBContext, IMapper mapper)
		{
            this._dBContext = dBContext;
            this._mapper = mapper;
		}


        public IEnumerable<Todo> GetAll()
        {
            var result = this._dBContext.Todos;
            return this._mapper.Map<IEnumerable<Todo>>(result);
        }

        public void Add(Todo item)
        {
            this._dBContext.Todos.Add(item);
        }

        public Todo? GetById(Guid id)
        {
            var result = this._dBContext.Todos.FirstOrDefault(item => item.Id == id);
            return this._mapper.Map<Todo>(result);
        }

        public Todo? Remove(Guid id)
        {
            var itemToDelete = this._dBContext.Todos.FirstOrDefault(item => item.Id == id);

            if (itemToDelete == null) return null;

             this._dBContext.Todos.Remove(itemToDelete);

            return this._mapper.Map<Todo>(itemToDelete);
        }

        public void Update(Todo item)
        {
            throw new NotImplementedException();
        }
    }
}

