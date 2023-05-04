import { apiClient } from "@core/config/apiClient";
import { AxiosRequestConfig } from "axios";

export abstract class ApiBaseRepository<TEntity> {
  private readonly endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (configs?: AxiosRequestConfig) =>
    apiClient.get<TEntity[]>(this.endpoint, configs);

  get = (id: string | number, configs?: AxiosRequestConfig) =>
    apiClient
      .get<TEntity>(`${this.endpoint}/${id}`, configs)
      .then((res) => res.data);
}
