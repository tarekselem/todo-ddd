using Todos.Application.Common;
using Todos.Domain.Entitties;
using Todos.Infrastructure.Persistence;

namespace Todos.Infrastructure
{
    public class DBContext : IDBContext
    {
        private readonly IAdapter<Todo> _dataAdapter;

        public DBContext(string connectionString)
        {
            this._dataAdapter = new JsonAdapter<Todo>(connectionString);

        }


        public List<Todo> Todos { get { return this._dataAdapter.LoadDBSet(); } set { } }

    }
}

