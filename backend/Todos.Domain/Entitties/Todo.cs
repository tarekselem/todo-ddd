using Todos.Domain.Entitties;

namespace Todos.Domain.Entitties;

public class Todo: BaseEntity
{
    public string Description { get; set; } = "";

    public DateTime? DueDate;

    public bool IsCompleted { get; set; } = false;
}

