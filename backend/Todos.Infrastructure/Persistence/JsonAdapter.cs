using System.Text.Json;


namespace Todos.Infrastructure.Persistence
{
    public class JsonAdapter<TEntity> : IAdapter<TEntity>
    {
        private readonly string _filePath;

        public JsonAdapter(string filePath)
        {
            this._filePath = filePath;
        }

        public List<TEntity> LoadDBSet()
        {
            using StreamReader reader = new StreamReader(this._filePath);
            var jsonData = reader.ReadToEnd();
            var serializeOptions = new JsonSerializerOptions
            {
                PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
            };
            return JsonSerializer.Deserialize<List<TEntity>>(jsonData, serializeOptions) ?? new List<TEntity>();
        }
    }
}

