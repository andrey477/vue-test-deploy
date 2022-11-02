import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import AuthPage from '@/views/AuthPage/AuthPage.vue';
import CategoriesPage from '@/views/CategoriesPage/CategoriesPage.vue';
import RecordPage from '@/views/RecordPage/RecordPage.vue';
import HistoryPage from '@/views/HistoryPage/HistoryPage.vue';
import PlanningPage from '@/views/PlanningPage/PlanningPage.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'RecordPage',
    meta: { layout: 'MainLayout' },
    component: RecordPage,
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'AuthLayout' },
    component: AuthPage,
  },
  {
    path: '/categories',
    name: 'CategoriesPage',
    meta: { layout: 'MainLayout' },
    component: CategoriesPage,
  },
  {
    path: '/history',
    name: 'HistoryPage',
    meta: { layout: 'MainLayout' },
    component: HistoryPage,
  },
  {
    path: '/planning',
    name: 'PlanningPage',
    meta: { layout: 'MainLayout' },
    component: PlanningPage,
  },
  {
    path: '/record',
    name: 'RecordPage',
    meta: { layout: 'MainLayout' },
    component: RecordPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
