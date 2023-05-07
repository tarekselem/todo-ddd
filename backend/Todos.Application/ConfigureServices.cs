namespace Todos.Infrastructure;

using System.Reflection;
using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using Todos.Application.Managers;
using Todos.Application.MappingProfil;
using Todos.Application.MappingProfiles;

public static class ConfigureApplicationServices
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {

        var mapper = new MapperConfiguration(cfg => {
            cfg.AddProfile<DtosMapper>();
            cfg.AddProfile<EntitiesMapper>();
        }).CreateMapper();

        services.AddSingleton(mapper); 
        services.AddScoped<ITodosManager, TodosManager>();

        return services;
    }
}

