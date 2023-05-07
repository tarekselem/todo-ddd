namespace Todos.Infrastructure;

using System.Reflection;
using AutoMapper;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Todos.Application;
using Todos.Application.Common;
using Todos.Application.MappingProfiles;
using Todos.Infrastructure.Persistence;
using Todos.Infrastructure.Repositories;

public static class ConfigureInfraServices
{
    public static IServiceCollection AddInfraServices(this IServiceCollection services, IConfiguration configuration)
    {
        var mapperConfiguration = new MapperConfiguration(cfg => {
            cfg.AddProfile<EntitiesMapper>();
        });

        var dbPath = configuration.GetConnectionString("AppDatabasePath");

        services.AddSingleton<IDBContext, DBContext>(x=> new DBContext(dbPath));
        services.AddScoped<ITodosRepository, TodosRepository>();

        return services;
    }
}

