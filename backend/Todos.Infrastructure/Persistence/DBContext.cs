using System;
using Todos.Application.Common;
using Todos.Application.Models;
using Todos.Infrastructure.Persistence;

namespace Todos.Infrastructure
{
    public class DBContext : IDBContext
    {
        private readonly IAdapter _dataAdapter;

		public DBContext(string connectionString)
		{
            this._dataAdapter = new JsonAdapter<Todo>(connectionString);

        }


        public IEnumerable<Todo> Todos { get { return (IEnumerable<Todo>)this._dataAdapter.LoadDBSet(); } set { } }


        Task<bool> IDBContext.SaveChangesAsync()
        {
            throw new NotImplementedException();
        }
    }
}

