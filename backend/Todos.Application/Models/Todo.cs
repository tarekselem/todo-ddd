﻿using System;
namespace Todos.Application.Models
{
	public class Todo
	{
        public Guid Id { get; set; }

        public string Description { get; set; } = "";

        public DateTime? DueDate { get; set; }
         
        public Boolean IsCompleted { get; set; }
    }
}

