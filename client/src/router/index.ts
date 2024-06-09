import { createRouter, createWebHistory } from 'vue-router'
import PingItem from '../components/PingItem.vue'
import BooksList from '../components/BooksList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'BooksList',
      component: BooksList,
    },
    {
      path: '/ping-item',
      name: 'pingItem',
      component: PingItem
    },
  ]
})

export default router
