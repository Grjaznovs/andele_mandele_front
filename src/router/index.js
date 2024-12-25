import { createRouter, createWebHistory } from 'vue-router'
import RickAndMortyView from '@/views/RickAndMortyView.vue'
import RickAndMortyShow from "@/components/rickandmorty/show/RickAndMortyShow.vue";

const routes = [
  {
    path: '/',
    name: 'RickAndMortyView',
    component: RickAndMortyView
  },
  {
    path: '/show/:characterId',
    name: 'RickAndMortyShow',
    component: RickAndMortyShow
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
})
