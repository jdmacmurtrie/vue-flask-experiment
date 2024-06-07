import PingItem from '../components/PingItem.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ping-item',
      name: 'pingItem',
      component: PingItem
    },
  ]
})

export default router
