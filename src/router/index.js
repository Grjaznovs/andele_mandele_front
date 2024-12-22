import { createRouter, createWebHistory } from 'vue-router'
import RickAndMortyView from '@/views/RickAndMortyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'RickAndMorty',
      component: RickAndMortyView,
    },
    // {
    //   path: '/show',
    //   name: 'RickAndMorty',
    //   component: RickAndMortyView,
    // },
  ],
})

export default router
