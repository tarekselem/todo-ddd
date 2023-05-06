using Microsoft.AspNetCore.Mvc;
using Todos.Application.Managers;
using Todos.Application.Models;

namespace Todos.Api.Controllers
{
    [Route("api/[controller]")]
    public class TodosController : Controller
    {
        private readonly List<TodoDTO> _todosList;
        private readonly ITodosManager _manager;

        public TodosController(ITodosManager manager)
        {
            this._manager = manager;
        }

        [HttpGet]
        public async Task<IActionResult> GetAsync(TodoStatusEnum? statusfilter)
        {
            var result = this._manager.getTodos(statusfilter);
            return Ok(result);
        }


        [HttpPost]
        public IActionResult Post([FromBody] NewTodoDTO newTodo)
        {
            try
            {
                if (newTodo == null || !ModelState.IsValid) return BadRequest();

                this._todosList.Add(new TodoDTO
                {
                    Id = Guid.NewGuid(),
                    Description = newTodo.Description,
                    DueDate = newTodo.DueDate
                });

                return Ok();
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

                var todoToUpdate = this._todosList.FirstOrDefault((todo) => todo.Id == id);
                if (todoToUpdate == null) return NotFound();

                todoToUpdate.IsCompleted = true;
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

            var todoToDelete = this._todosList.FirstOrDefault((todo) => todo.Id == id);
            if (todoToDelete == null) return NotFound();

            this._todosList.Remove(todoToDelete);
            return Ok();
        }
    }
}

