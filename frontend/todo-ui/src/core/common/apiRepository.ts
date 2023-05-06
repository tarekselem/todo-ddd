import { AxiosRequestConfig } from "axios";
import { apiClient } from "@core/config/apiClient";

export class ApiBaseRepository<TEntity> {
  private readonly endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll(configs?: AxiosRequestConfig) {
    return apiClient
      .get<ReadonlyArray<TEntity>>(this.endpoint, configs)
      .then((res) => res.data);
  }

  get(id: string, configs?: AxiosRequestConfig) {
    return apiClient
      .get<TEntity>(`${this.endpoint}/${id}`, configs)
      .then((res) => res.data);
  }

  post<TData>(data: TData, configs?: AxiosRequestConfig) {
    return apiClient
      .post<TEntity>(this.endpoint, data, configs)
      .then((res) => res.data);
  }

  delete(id: string, configs?: AxiosRequestConfig) {
    return apiClient
      .delete(`${this.endpoint}/${id}`, configs)
      .then((res) => res.data);
  }

  patch<TData>(customUrl: string, data?: TData, configs?: AxiosRequestConfig) {
    return apiClient
      .patch<TEntity>(customUrl, data, configs)
      .then((res) => res.data);
  }
}
