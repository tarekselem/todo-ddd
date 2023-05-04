import { TodosApiRepository } from "../data";
import { ITodosRepository } from "../application/repositories";

const todosRepository: ITodosRepository = new TodosApiRepository();
const API_ENDPOINT: string = "/todos";

export { todosRepository, API_ENDPOINT };
