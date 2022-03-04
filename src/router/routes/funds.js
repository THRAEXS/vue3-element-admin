import Layout from '@/layout/index.vue';

export default [
    {
        path: '/signup/org',
        component: () => import('@/views/funds/signup/org.vue'),
        meta: { title: '高校注册', hidden: true }
    },
    {
        path: '/signup/user',
        component: () => import('@/views/funds/signup/user.vue'),
        meta: { title: '用户注册', hidden: true }
    },
    {
        path: '/registry',
        component: Layout,
        meta: { title: '立项管理' },
        children: [
            {
                path: '',
                component: () => import('@/views/funds/registry/index.vue'),
                meta: { title: '项目列表' }
            },
            {
                path: 'demo',
                component: () => import('@/views/funds/registry/demo.vue'),
                meta: { title: 'Demo Page' }
            }
        ]
    }
];
