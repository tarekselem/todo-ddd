using System;
using System.Collections;

namespace Todos.Infrastructure.Persistence
{
	public interface IAdapter<TEntity>
	{
        List<TEntity> LoadDBSet();

    }
}

