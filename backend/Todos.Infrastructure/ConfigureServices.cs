namespace Todos.Infrastructure;

using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

public class ConfigurationsService
{
    private readonly IServiceCollection _services;

    public ConfigurationsService(IServiceCollection services)
    {
        this._services = services;
    }

    public void ConfigureServices( WebApplicationBuilder builder)
    {
        //Setup database connection
        //builder
        //    .Services
        //    .AddDbContext<UniversityDbContext>(opt => opt.UseSqlServer(ConnectionString));

        // DI - Register repository
        this._services.AddTransient<string, string>();
    }
}

