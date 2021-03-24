import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Components from '@/router/components';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: () => import('../views/home.vue') },
  ...(Components.documentComponents as Array<RouteRecordRaw>)
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
