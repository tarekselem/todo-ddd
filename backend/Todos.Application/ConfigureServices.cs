﻿namespace Todos.Infrastructure;

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

        var configuration = new MapperConfiguration(cfg => {
            cfg.AddProfile<DtosMapper>();
        });

        services.AddScoped<ITodosManager, TodosManager>();

        return services;
    }
}

