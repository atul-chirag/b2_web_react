import axios from 'axios';
import { API_BASE_URL } from './constants';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  },
  
});

apiClient.interceptors.request.use(
  config => {
    return config;
  },
  error => Promise.reject(error)
);

apiClient.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return error.response;
});

