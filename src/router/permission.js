import router from '.';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { pageTitle, Cookie } from '@/utils';

NProgress.configure({ showSpinner: false });

const PERMITS = [
    '/login'
];

router.beforeEach((to, from, next) => {
    NProgress.start();
    document.title = pageTitle(to.meta?.title);

    const token = Cookie.getToken();

    if (token) {
        next();
    } else {
        if (PERMITS.includes(to.path)) {
            next();
        } else {
            const isRoot = to.path === '/';
            next(isRoot ? '/login' : `/login?redirect=${to.path}`);
        }
    }
});

router.afterEach(NProgress.done);
