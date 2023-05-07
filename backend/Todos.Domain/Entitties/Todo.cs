﻿
namespace Todos.Domain.Entitties;

public class Todo : BaseEntity
{
    public string Description { get; set; } = "";

    public DateTime? DueDate { get; set; }

    public bool IsCompleted { get; set; }
}

