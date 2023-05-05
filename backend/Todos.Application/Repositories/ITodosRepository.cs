using Todos.Domain.Entitties;

namespace Todos.Application;

public interface ITodoRepository
{
    IEnumerable<Todo> GetAll();
    Todo Find(Guid id);
    Todo Remove(string key);
    void Add(Todo item);
    void Update(Todo item);
}

