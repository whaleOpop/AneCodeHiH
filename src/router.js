import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from './views/WelcomePage.vue'
import TeamPage from './views/TeamPage.vue'

const routes = [
  {
    path: '/',
    name: 'WelcomePage',
    component: WelcomePage
  },
  {
    path: '/team',
    name: 'TeamPage',
    component: TeamPage
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Use import.meta.env.BASE_URL
  routes,
});

export default router;