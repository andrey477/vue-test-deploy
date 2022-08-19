import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home/Home.vue';
import AuthPage from '@/views/AuthPage/AuthPage.vue';
import CategoriesPage from '@/views/CategoriesPage/CategoriesPage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'MainLayout' },
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'AuthLayout' },
    component: AuthPage,
  },
  {
    path: '/categories',
    name: 'categories',
    meta: { layout: 'MainLayout' },
    component: CategoriesPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
