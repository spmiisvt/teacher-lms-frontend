import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/subjects',
    name: 'Subjects',
    component: () => import('@/views/Subjects')
  },
  {
    path: '/groups',
    name: 'Groups',
    component: () => import('@/views/Groups')
  },
  {
    path: '/students',
    name: 'Students',
    component: () => import('@/views/Students')
  },
  {
    path: '/attendance',
    name: 'Attendance',
    component: () => import('@/views/Attendance')
  },
  {
    path: '/estimation',
    name: 'Estimation',
    component: () => import('@/views/Estimation')
  },
  {
    path: '/presentation',
    name: 'Presentation',
    component: () => import('@/views/Presentation')
  },
  {
    path: '/files',
    name: 'Files',
    component: () => import('@/views/FileManager')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
