import axios, { type AxiosRequestConfig } from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
})

http.interceptors.request.use(config => config)

http.interceptors.response.use(
  ({ data }) => Promise.resolve(data),
  error => Promise.reject(error.response.data || error.message),
)

export function AxiosGet<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>) {
  return http.get<T, T>(url, config)
}

export function AxiosPost<T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>) {
  return http.post<T, T, D>(url, data, config)
}

export function AxiosPut<T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>) {
  return http.put<T, T, D>(url, data, config)
}

export function AxiosDelete<T = any, D = any>(url: string, config?: AxiosRequestConfig<D>) {
  return http.delete<T, T>(url, config)
}
