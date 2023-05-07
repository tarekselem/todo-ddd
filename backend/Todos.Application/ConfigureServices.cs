namespace Todos.Infrastructure;

using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using Todos.Application.Managers;
using Todos.Application.MappingProfil;
using Todos.Application.MappingProfiles;

public static class ConfigureApplicationServices
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {

        var mapper = new MapperConfiguration(cfg =>
        {
            cfg.AddProfile<EntitiesMapper>();
            cfg.AddProfile<DtosMapper>();
        }).CreateMapper();

        services.AddSingleton(mapper);
        services.AddScoped<ITodosManager, TodosManager>();

        return services;
    }
}

