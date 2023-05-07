

namespace Todos.Application.Models
{
    public class Todo
    {
        public Guid Id { get; set; }

        public string Description { get; set; } = "";

        public DateTime? DueDate { get; set; }

        public bool IsCompleted { get; set; }

        public bool IsOverdue { get; set; }

    }
}

