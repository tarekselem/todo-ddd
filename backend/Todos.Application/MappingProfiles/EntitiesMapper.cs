using System;
using AutoMapper;
using Entities = Todos.Application.Models;
using Models = Todos.Application.Models;

namespace Todos.Application.MappingProfiles
{
	public class EntitiesMapper : Profile
    {
		public EntitiesMapper()
		{
            CreateMap<Entities.Todo, Models.Todo>();
        }
	}
}