using System;
using Todos.Domain.Entitties;

namespace Todos.Application.Common
{
	public interface IDBContext
	{
        List<Todo> Todos { get; set; }

	}
}

