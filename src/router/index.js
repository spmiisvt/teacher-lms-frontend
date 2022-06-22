import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from "@/views/Dashboard";
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'AppLayoutDefault',
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      layout: 'AppLayoutDashboard'
    },
    children: [
      {
        path: 'subjects',
        name: 'Subjects',
        meta: {
          title: "Дисциплины"
        },
        component: () => import('@/views/Subjects')
      },
      {
        path: 'groups',
        name: 'Groups',
        meta: {
          title: "Группы"
        },
        component: () => import('@/views/Groups')
      },
      {
        path: 'students',
        name: 'Students',
        meta: {
          title: "Студенты"
        },
        component: () => import('@/views/Students')
      },
      {
        path: 'attendance',
        name: 'Attendance',
        meta: {
          title: "Посещаемость"
        },
        component: () => import('@/views/Attendance')
      },
      {
        path: 'estimation',
        name: 'Estimation',
        meta: {
          title: "Аттестация"
        },
        component: () => import('@/views/Estimation')
      },
      {
        path: 'presentation',
        name: 'Presentation',
        meta: {
          title: "Транслиция"
        },
        component: () => import('@/views/Presentation')
      },
      {
        path: 'files',
        name: 'Files',
        meta: {
          title: "Файлы"
        },
        component: () => import('@/views/FileManager')
      }
    ]
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
