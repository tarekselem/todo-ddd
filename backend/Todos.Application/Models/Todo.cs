using System;
using Entities = Todos.Domain.Entitties;

namespace Todos.Application.Models
{
	public class Todo: Entities.Todo
    {
        public bool IsOverdue { get { return this.DueDate > DateTime.Today; } }

    }
}

