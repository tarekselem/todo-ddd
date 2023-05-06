using System;
using Todos.Application.Common;
using Todos.Application.Models;
using Todos.Infrastructure.Persistence;

namespace Todos.Infrastructure
{
	public class DBContext: IDBContext
    {
        private readonly object _dataAdapter;

		public DBContext()
		{
            this._dataAdapter = new JsonAdapter<object>("");

        }

        HashSet<Todo> IDBContext.Todos { get; set ; }


        Task<bool> IDBContext.SaveChangesAsync()
        {
            throw new NotImplementedException();
        }
    }
}

