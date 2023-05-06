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


        public List<Todo> Todos { get { return (List<Todo>)this._dataAdapter.LoadDBSet(); } set { } }

    }
}

