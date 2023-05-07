using System.ComponentModel.DataAnnotations;
using Todos.Application.Models;

namespace Todos.Application.DTOs;

public class TodoDto
{
    public Guid Id { get; set; }

    public string Description { get; set; } = string.Empty;

    public DateTime? DueDate { get; set; }

    public Boolean IsCompleted { get; set; } = false;

    public Boolean IsOverdue { get; set; } = false;
}


public class NewTodoDto
{
    [Required]
    [MinLength(10)]
    public string Description { get; set; } = string.Empty;

    public DateTime? DueDate { get; set; }
}


public class UpdateTodoDto
{
    [Required]
    [MinLength(10)]
    public string Description { get; set; } = string.Empty;

    public DateTime? DueDate { get; set; }

}