using System;
using Todos.Application.Models;

namespace Todos.Application.Common
{
	public interface IDBContext
	{
		HashSet<Todo> Todos { get; set; }

		Task<bool> SaveChangesAsync();
	}
}

