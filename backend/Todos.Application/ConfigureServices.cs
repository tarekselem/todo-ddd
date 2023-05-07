namespace Todos.Infrastructure;

using System.Reflection;
using Microsoft.Extensions.DependencyInjection;
using Todos.Application.Managers;


public static class ConfigureApplicationServices
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services)
    {
        services.AddAutoMapper(Assembly.GetExecutingAssembly());
        services.AddScoped<ITodosManager, TodosManager>();
        return services;
    }
}

