using System;
namespace Todos.Domain.Entitties
{
	public class BaseEntity
	{
        public virtual Guid Id { get; set; }

        //TODO: add createdon, updatedon
    }
}

