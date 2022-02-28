import {
    createRouter,
    createWebHistory
} from 'vue-router';

import Layout from '@/layout/index.vue';

const routes = [
    { path: '/login', component: () => import('@/views/login.vue') },
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/views/home.vue'),
                meta: { title: 'Home' }
            }
        ]
    },
    {
        path: '/about',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/views/about.vue'),
                meta: { title: 'About' }
            }
        ]
    },
    {
        path: '/error',
        component: Layout,
        children: [
            {
                path: '404',
                component: () => import('@/views/error/404.vue'),
                meta: { title: '404' }
            },
            {
                path: '500',
                component: () => import('@/views/error/500.vue'),
                meta: { title: '500' }
            }
        ]
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});
