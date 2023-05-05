import { TodosApiRepository } from "../data";
import { ITodosRepository } from "../application/repositories";

const API_ENDPOINT: string = "/todos";
const todosRepository: ITodosRepository = new TodosApiRepository();

export { todosRepository, API_ENDPOINT };
