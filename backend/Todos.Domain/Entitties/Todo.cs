using Todos.Domain.Entitties;

namespace Todos.Domain.Entitties;

public class Todo: BaseEntity
{
    public string Description { get; set; } = "";

    public DateOnly? DueDate;

    public Boolean IsCompleted { get; set; } = false;
}

