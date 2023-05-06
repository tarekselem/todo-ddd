using System;
using Todos.Application.Models;

namespace Todos.Application.Common
{
	public interface IDBContext
	{
        List<Todo> Todos { get; set; }

	}
}

