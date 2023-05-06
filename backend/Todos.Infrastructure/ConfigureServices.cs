namespace Todos.Infrastructure;

using System.Reflection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Todos.Application;
using Todos.Application.Common;
using Todos.Infrastructure.Persistence;
using Todos.Infrastructure.Repositories;

public static class ConfigureInfraServices
{
    public static IServiceCollection AddInfraServices(this IServiceCollection services, IConfiguration configuration)
    {
        var dbPath = configuration.GetConnectionString("AppDatabasePath");

        services.AddSingleton<IDBContext, DBContext>(x=> new DBContext(dbPath));
        services.AddScoped<ITodosRepository, TodosRepository>();

        return services;
    }
}

