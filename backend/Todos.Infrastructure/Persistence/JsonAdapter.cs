using System;
using Newtonsoft.Json;


namespace Todos.Infrastructure.Persistence
{
	public class JsonAdapter<TEntity>
	{
		public readonly ICollection<TEntity> DBSet;

		private readonly string _filePath;

		public JsonAdapter(string filePath)
		{
			this._filePath = filePath;
			this.DBSet =  this.LoadDBSet();
		}



		private ICollection<TEntity> LoadDBSet()
		{
            using (StreamReader reader = new StreamReader(this._filePath))
            {
                var jsonData = reader.ReadToEnd();
                return JsonConvert.DeserializeObject<List<TEntity>>(jsonData);
            }
        }
	}
}

