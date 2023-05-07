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
            this._dataSet = this._dataAdapter.LoadDBSet();
        }

        private readonly List<Todo> _dataSet;
        public List<Todo> Todos { get => this._dataSet; }
    }
}

