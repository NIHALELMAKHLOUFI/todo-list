import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import TodoList from '../components/TodoList.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/todos', name: 'TodoList', component: TodoList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
