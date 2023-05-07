using AutoMapper;
using Todos.Application.DTOs;
using Todos.Application.Models;


namespace Todos.Application.Managers
{
    public class TodosManager : ITodosManager
    {
        private readonly ITodosRepository _repository;
        private readonly IMapper _mapper;

        public TodosManager(ITodosRepository todosRepository, IMapper mapper)
        {
            this._repository = todosRepository;
            this._mapper = mapper;
        }

        public IEnumerable<TodoDto> GetTodos(TodoStatusEnum? statusFilter)
        {
            IEnumerable<Todo> result;

            if (statusFilter == TodoStatusEnum.completed)
            {
                result = this._repository.GetAll().Where(todo => todo.IsCompleted).ToList();
            }
            else if (statusFilter == TodoStatusEnum.Active)
            {
                result = this._repository.GetAll().Where(todo => !todo.IsCompleted).ToList();
            }
            else
            {
                result = this._repository.GetAll();
            }

            return this._mapper.Map<IEnumerable<TodoDto>>(result);
        }

        public TodoDto AddTodo(NewTodoDto item)
        {
            var newTodo = new Todo
            {
                Id = Guid.NewGuid(),
                IsCompleted = false,
                Description = item.Description,
                DueDate = item.DueDate
            };

            this._repository.Add(newTodo);
            return this._mapper.Map<TodoDto>(newTodo);
        }

        public TodoDto? CompleteTodo(Guid id)
        {
            var todoToUpdate = this._repository.GetById(id);

            if (todoToUpdate == null) return null;

            todoToUpdate.IsCompleted = true;
            return this._mapper.Map<TodoDto>(todoToUpdate);
        }

        public TodoDto? DeleteTodo(Guid id)
        {
            var todoToDelete = this._repository.Remove(id);

            if (todoToDelete == null) return null;
            return this._mapper.Map<TodoDto>(todoToDelete);
        }

    }
}

