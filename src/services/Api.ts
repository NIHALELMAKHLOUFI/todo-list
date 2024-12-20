import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:9000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  // RETURN TASK
  getTasks() {
    return apiClient.get('/todo');
  },

  // ADD TASK
  addTask(task: { title: string }) {
    return apiClient.post('/todo', task);
  },

  // DELETE TASK
  deleteTask(id: number) {
    return apiClient.delete(`/todo/${id}`);
  },

  // UPDATE
  updateTask(id: number, task: { title: string }) {
    return apiClient.put(`/todo/${id}`, task);
  }, 
};
