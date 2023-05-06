using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Todos.Api.Controllers
{
    [Route("api/[controller]")]
    public class TodosController : Controller
    {
        private readonly List<TodoDTO> _todosList;

        public TodosController()
        {
            this._todosList = new List<TodoDTO>{

            new TodoDTO {Id = new Guid("cd5d6682-c407-41f7-b0f8-d51f28874931"), Description="Hi test ftedfkm XYZ", DueDate= DateTime.Today},
            new TodoDTO {Id = new Guid("cd5d6682-c407-41f7-b0f8-d51f28874932"), Description="Finish XYZ", DueDate= DateTime.Today, IsOverdue= true},
            new TodoDTO {Id = new Guid("cd5d6682-c407-41f7-b0f8-d51f28874933"), Description="Learn ZYZ", IsCompleted=true},
            new TodoDTO {Id = new Guid("cd5d6682-c407-41f7-b0f8-d51f28874934"), Description="Finish XYZ", DueDate= DateTime.Today},
            new TodoDTO {Id = new Guid("cd5d6682-c407-41f7-b0f8-d51f28874935"), Description="Finish XYZ", DueDate= DateTime.Today},
            new TodoDTO {Id = new Guid("cd5d6682-c407-41f7-b0f8-d51f28874936"), Description="Finish XYZ", DueDate= DateTime.Today},
            new TodoDTO {Id = new Guid("cd5d6682-c407-41f7-b0f8-d51f28874937"), Description="Finish XYZ", DueDate= DateTime.Today},

};
        }

        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            return Ok(this._todosList);
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

