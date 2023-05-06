
using Todos.Application.Models;

namespace Todos.Application;

public interface ITodosRepository
{
    IEnumerable<Todo> GetAll();
    Todo? GetById(Guid id);
    Todo? Remove(Guid id);
    void Add(Todo item);
    void Update(Todo item);
}

