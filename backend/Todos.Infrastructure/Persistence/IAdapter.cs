

namespace Todos.Infrastructure.Persistence
{
    public interface IAdapter<TEntity>
    {
        List<TEntity> LoadDBSet();

    }
}

