import Layout from '@/layout/index.vue';

export default [
    {
        path: '/example',
        component: Layout,
        redirect: '/example/table',
        meta: { title: 'Example', icon: 'el-icon-s-help' },
        children: [
            {
                path: 'table',
                name: 'TableRouuter',
                component: () => import('@/views/sample/table.vue'),
                meta: { title: 'Table', icon: 'table' }
            },
            {
                path: 'tree',
                name: 'TreeRouter',
                component: () => import('@/views/sample/tree.vue'),
                meta: { title: 'Tree', icon: 'tree' }
            }
        ]
    },
    {
        path: '/form',
        component: Layout,
        children: [
            {
                path: '',
                name: 'FormRouter',
                component: () => import('@/views/sample/form.vue'),
                meta: { title: 'Form', icon: 'form' }
            }
        ]
    },
    {
        path: '/nested',
        component: Layout,
        redirect: '/nested/menu1',
        name: 'NestedRouter',
        meta: { title: 'Nested', icon: 'nested' },
        children: [
            {
                path: 'menu1',
                component: () => import('@/views/sample/nested/menu1/index.vue'), // Parent router-view
                name: 'Menu1Router',
                meta: { title: 'Menu1' },
                children: [
                    {
                        path: 'menu1-1',
                        component: () => import('@/views/sample/nested/menu1/menu1-1/index.vue'),
                        name: 'Menu11Router',
                        meta: { title: 'Menu1-1' }
                    },
                    {
                        path: 'menu1-2',
                        component: () => import('@/views/sample/nested/menu1/menu1-2/index.vue'),
                        name: 'Menu12Router',
                        meta: { title: 'Menu1-2' },
                        children: [
                            {
                                path: 'menu1-2-1',
                                component: () => import('@/views/sample/nested/menu1/menu1-2/menu1-2-1/index.vue'),
                                name: 'Menu121Router',
                                meta: { title: 'Menu1-2-1' }
                            },
                            {
                                path: 'menu1-2-2',
                                component: () => import('@/views/sample/nested/menu1/menu1-2/menu1-2-2/index.vue'),
                                name: 'Menu122Router',
                                meta: { title: 'Menu1-2-2' }
                            }
                        ]
                    },
                    {
                        path: 'menu1-3',
                        component: () => import('@/views/sample/nested/menu1/menu1-3/index.vue'),
                        name: 'Menu13Router',
                        meta: { title: 'Menu1-3' }
                    }
                ]
            },
            {
                path: 'menu2',
                component: () => import('@/views/sample/nested/menu2/index.vue'),
                name: 'Menu2Router',
                meta: { title: 'menu2' }
            }
        ]
    }
];
