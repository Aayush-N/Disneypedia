import { createRouter, createWebHistory } from 'vue-router'
import CharacterDetail from '../components/CharacterDetail.vue'
import HomeView from '../views/HomeView.vue'
import RedirectView from '../views/RedirectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/character/:id',
      name: 'charachterDetail',
      component: CharacterDetail
    },
    {
      path: '/lucky/',
      name: 'randomRedirect',
      component: RedirectView
    }
  ]
})

export default router
