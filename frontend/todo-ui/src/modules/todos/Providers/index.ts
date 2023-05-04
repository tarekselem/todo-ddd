import { TodosApiRepository } from "../data";
import { ITodosRepository } from "../domain/repositories";

const todosRepository: ITodosRepository = new TodosApiRepository();
const API_ENDPOINT: string = "/todos";

export { todosRepository, API_ENDPOINT };
