using Microsoft.AspNetCore.Mvc;
using Todos.Application.DTOs;
using Todos.Application.Managers;
using Todos.Application.Models;

namespace Todos.Api.Controllers
{
    [Route("api/[controller]")]
    public class TodosController : Controller
    {
        private readonly ITodosManager _manager;

        public TodosController(ITodosManager manager)
        {
            this._manager = manager;
        }

        [HttpGet]
        public async Task<IActionResult> GetAsync(TodoStatusEnum? statusfilter)
        {
            var result = this._manager.GetTodos(statusfilter);
            return Ok(result);
        }


        [HttpPost]
        public IActionResult Post([FromBody] NewTodoDto newTodo)
        {
            try
            {
                if (newTodo == null || !ModelState.IsValid) return BadRequest();

                var result = this._manager.AddTodo(newTodo);
                return Ok(result);
            }
            catch (System.Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpPatch("{id}/MarkAsCompleted")]
        public IActionResult MarkAsCompleted(Guid id)
        {
            try
            {
                // TODO: move to generic filter
                if (!ModelState.IsValid) return BadRequest();

                var todoToUpdate = this._manager.CompleteTodo(id);
                if (todoToUpdate == null) return NotFound();

                return Ok(todoToUpdate);

            }
            catch (System.Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            if (!ModelState.IsValid) return BadRequest();

            var todoToDelete = this._manager.DeleteTodo(id);

            if (todoToDelete == null) return NotFound();

            return Ok(todoToDelete);
        }
    }
}

