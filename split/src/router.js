import { createRouter, createWebHistory } from 'vue-router';
import AdminDashboard from './pages/AdminDashboard.vue';
import ManageProducts from './pages/ManageProducts.vue';
import ManageReviews from './pages/ManageReviews.vue';
import LoginPage from './pages/LoginPage.vue';
import WelcomePage from './pages/WelcomePage.vue';

const routes = [
  {
    path: '/',
    component: AdminDashboard,
    children: [
      { path: '', component: ManageProducts },
      { path: 'reviews', component: ManageReviews },
    ],
  },
  {
    path: '/admin',
    component: AdminDashboard,
    children: [
      { path: 'products', component: ManageProducts },
      { path: 'reviews', component: ManageReviews },
    ],
  },
  { path: '/login', component: LoginPage},
  { path: '/welcome', component: WelcomePage },
  { path: '/main', component: ManageProducts },
];

const router = createRouter({
  history: createWebHistory('/Split/'),
  routes,
});

export default router;