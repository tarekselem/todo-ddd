

namespace Todos.Infrastructure.Persistence
{
    public interface IAdapter<TEntity> where TEntity : class
    {
        List<TEntity> LoadDBSet();

    }
}

