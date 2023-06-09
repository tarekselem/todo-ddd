﻿using AutoMapper;
using Todos.Application.DTOs;
using Todos.Application.Models;

namespace Todos.Application.MappingProfil
{
    public class DtosMapper : Profile
    {
        public DtosMapper()
        {
            CreateMap<Todo, TodoDto>();
        }
    }
}

