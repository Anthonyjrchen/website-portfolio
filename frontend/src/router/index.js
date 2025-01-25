import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import WorksView from '../views/WorksView.vue'
import ResumeView from '../views/ResumeView.vue'
import WorksAnniversary from '@/views/works/WorksAnniversary.vue'
import WorksDAhandler from '@/views/works/WorksDAhandler.vue'
import WorksPortfolio from '@/views/works/WorksPortfolio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/works',
      name: 'works',
      component: WorksView,
      children: [
        {
          path:'portfolio',
          component: WorksPortfolio
        },
        {
          path:'DAhandler',
          component:WorksDAhandler
        },
        {
          path:'anniversary',
          component:WorksAnniversary
        },
      ],
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView,
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
})

export default router
