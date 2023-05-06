
using Todos.Application.Models;

namespace Todos.Application;

public interface ITodosRepository
{
    IEnumerable<Todo> GetAll();
    Todo Find(Guid id);
    Todo Remove(string key);
    void Add(Todo item);
    void Update(Todo item);
}

