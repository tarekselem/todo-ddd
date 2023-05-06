using System;
using Todos.Application.Models;

namespace Todos.Application.Common
{
	public interface IDBContext
	{
        IEnumerable<Todo> Todos { get; set; }

		Task<bool> SaveChangesAsync();
	}
}

