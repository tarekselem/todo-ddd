import { TodosApiRepository } from "../data";
import { ITodosRepository } from "../application/repositories";

const API_ENDPOINT = "/todos";
const todosRepository: ITodosRepository = new TodosApiRepository(API_ENDPOINT);

export { todosRepository };
