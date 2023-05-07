using System;
using AutoMapper;
using Entities = Todos.Domain.Entitties;
using Models = Todos.Application.Models;

namespace Todos.Application.MappingProfiles
{
	public class EntitiesMapper : Profile
    {
		public EntitiesMapper()
		{
            CreateMap<Entities.Todo, Models.Todo>().ForMember(opt=> opt.IsOverdue, conf=>conf.MapFrom(x =>x.DueDate > DateTime.Today));
        }
	}
}