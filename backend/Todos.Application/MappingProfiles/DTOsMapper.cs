using System;
using AutoMapper;
using Todos.Application.Common.Mappings;
using Todos.Application.DTOs;
using Todos.Application.Models;

namespace Todos.Application.MappingProfil
{
	public class TodoMapper: Profile
    {
        public TodoMapper()
		{
            CreateMap<Todo, TodoDto>();
        }
    }
}

