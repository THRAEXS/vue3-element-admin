import {
    createRouter,
    createWebHistory
} from 'vue-router';

import Layout from '@/layout/index.vue';
import Routes from './routes';

const routes = [
    { path: '/login', component: () => import('@/views/base/login.vue') },
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/views/base/dashboard.vue'),
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
                component: () => import('@/views/base/about.vue'),
                meta: { title: 'About' }
            }
        ]
    },
    {
        path: '/error',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/views/base/error.vue'),
                meta: { title: 'Error' }
            }
        ]
    },
    ...Routes
];

export default createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior: _ => ({ y: 0 })
});
