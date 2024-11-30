import { createRouter, createWebHistory } from 'vue-router'

import NProgress from 'nprogress';



import WelcomePage from './views/WelcomePage.vue'
import TeamPage from './views/TeamPage.vue'
import DashBoard from './views/DashBoard.vue'

import ReportsPage from './views/ReportsPage.vue'
import CreateReportPage from './views/CreateReportPage.vue'
import HelpPage from './views/HelpPage.vue'
import SupportPage from './views/SupportPage.vue'

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
        name: 'Main',
        component: ReportsPage,
      },
      {
        path: 'create',
        name: 'Create',
        component: CreateReportPage,
      },
      {
        path: 'help',
        name: 'Help',
        component: HelpPage,
      },
      {
        path: 'support',
        name: 'Support',
        component: SupportPage,
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Use import.meta.env.BASE_URL
  routes,
});

router.beforeEach((to, from, next) => {
  // Запуск индикатора прогресса
  NProgress.start();
  NProgress.configure({ easing: 'ease', speed: 400 });
  NProgress.configure({ showSpinner: false });
  setTimeout(() => {
    next(); // Переход к следующему роуту после задержки
  }, 300)
});

router.afterEach(() => {
  // Завершение индикатора прогресса
  NProgress.done();
});

export default router;