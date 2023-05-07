using Microsoft.AspNetCore.Mvc;
using Todos.Application.DTOs;
using Todos.Application.Services;
using Todos.Application.Models;

namespace Todos.Api.Controllers
{
    [Route("api/[controller]")]
    public class TodosController : Controller
    {
        private readonly ITodoService _service;

        public TodosController(ITodoService service)
        {
            this._service = service;
        }

        [HttpGet]
        public IActionResult Get(TodoStatusEnum? statusfilter)
        {
            var result = this._service.GetTodos(statusfilter);
            return Ok(result);
        }


        [HttpPost]
        public IActionResult Post([FromBody] NewTodoDto newTodo)
        {
            if (newTodo == null || !ModelState.IsValid) return BadRequest();

            var result = this._service.AddTodo(newTodo);
            return Ok(result);

        }

        [HttpPatch("{id}/MarkAsCompleted")]
        public IActionResult MarkAsCompleted(Guid id)
        {

            if (!ModelState.IsValid) return BadRequest();

            var todoToUpdate = this._service.CompleteTodo(id);
            if (todoToUpdate == null) return NotFound();

            return Ok(todoToUpdate);

        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            if (!ModelState.IsValid) return BadRequest();

            var todoToDelete = this._service.DeleteTodo(id);

            if (todoToDelete == null) return NotFound();

            return Ok(todoToDelete);
        }
    }
}

