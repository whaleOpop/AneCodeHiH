import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from './views/WelcomePage.vue'
import TeamPage from './views/TeamPage.vue'
import DashBoard from './views/DashBoard.vue'

import ReportPage from './views/ReportsPage.vue'

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
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashBoard,
    children: [
      {
        path: 'main',
        name: 'main',
        component: ReportPage,
      },
      {
        path: 'help',
        name: 'help',
        component: DashBoard,
      },
      {
        path: 'support',
        name: 'Home',
        component: DashBoard,
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Use import.meta.env.BASE_URL
  routes,
});

export default router;