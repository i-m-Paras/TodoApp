// File: src/services/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getTodos = () => API.get('/todos');
export const addTodo = (task) => API.post('/todos', { task });
export const deleteTodo = (id) => API.delete(`/todos/${id}`);
export const summarizeTodos = () => API.post('/summarize');
