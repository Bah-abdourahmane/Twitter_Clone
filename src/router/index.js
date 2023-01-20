import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '@/views/ProfileView.vue'
import MessagesView from '@/views/MessagesView.vue'
import ExploreView from '@/views/ExploreView.vue'
import NotificationsView from '@/views/NotificationsView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    iconClass: 'fas fa-home',
    mainMenu: true,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileView
  },
  {
    path: '/explore',
    name: 'explore',
    component: ExploreView,
    iconClass: 'fas fa-search',
    mainMenu: true,
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: NotificationsView,
    iconClass: 'fas fa-bell',
    mainMenu: true,
  },
  {
    path: '/messages',
    name: 'Messages',
    component: MessagesView,
    iconClass: 'fas fa-envelope',
    mainMenu: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
