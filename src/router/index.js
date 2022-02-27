import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [
    { path: '/', component: _ => import('@/views/home.vue') },
    { path: '/login', component: _ => import('@/views/login/index.vue') },
    { path: '/about', component: _ => import('@/views/about.vue') }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
