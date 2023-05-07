
using AutoMapper;
using Entities = Todos.Domain.Entitties;

namespace Todos.Application.MappingProfiles
{
    public class EntitiesMapper : Profile
    {
        public EntitiesMapper()
        {
            CreateMap<Entities.Todo, Models.Todo>().ForMember(opt => opt.IsOverdue, conf => conf.MapFrom(x => x.DueDate < DateTime.Today));
        }
    }
}