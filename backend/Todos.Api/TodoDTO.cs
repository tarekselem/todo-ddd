namespace Todos.Api;

public class TodoDTO
{
    public Guid Id { get; set; }

    public string Description { get; set; } = "";

    public DateTime? DueDate;

    public Boolean IsCompleted { get; set; } = false;
    public Boolean IsOverdue { get; set; } = false;
}


public class NewTodoDTO
{
    public string Description { get; set; } = "";

    public DateTime? DueDate;
}


public class UpdateTodoDTO
{
    public string? Description { get; set; }

    public DateTime? DueDate { get; set; }

    public Boolean? IsCompleted { get; set; }

}