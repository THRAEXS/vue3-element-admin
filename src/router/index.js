import {
    createRouter,
    createWebHistory
} from 'vue-router';

import Layout from '@/layout/index.vue';

const routes = [
    { path: '/login', component: () => import('@/views/login.vue') },
    { path: '/about', component: () => import('@/views/about.vue') },
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
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});
