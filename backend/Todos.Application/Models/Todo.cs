using System;
using Entities = Todos.Domain.Entitties;

namespace Todos.Application.Models
{
	public class Todo
    {
        public Guid Id { get; set; }

        public string Description { get; set; } = "";

        public DateTime? DueDate;

        public bool IsCompleted { get; set; }

        public bool IsOverdue { get; set; }

    }
}

