namespace Todos.Infrastructure;

using System.Reflection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;


public static class ConfigureInfraServices
{
    public static IServiceCollection AddInfraServices(this IServiceCollection services, IConfiguration configuration)
    {
        var dbPath = configuration.GetConnectionString("AppDatabase");

        //services.AddAutoMapper(Assembly.GetExecutingAssembly());

        services.AddScoped<Application.ITodosRepository, Repositories.TodosRepository>();

        return services;
    }
}

