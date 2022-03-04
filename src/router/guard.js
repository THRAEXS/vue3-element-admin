import router from '.';
import store from '@/store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { ElMessage } from 'element-plus';
import { pageTitle, Cookie } from '@/utils';

NProgress.configure({ showSpinner: false });

const PERMITS = [
    '/signin',
    '/signup/org',
    '/signup/user'
];

const toLogin = redirect => ({ path: '/signin', query: redirect === '/' ? {} : { redirect }});

router.beforeEach(async(to, from, next) => {
    NProgress.start();

    const { path, meta } = to;

    document.title = pageTitle(meta?.title);

    if (Cookie.getToken()) {
        if (path === '/signin') {
            next('/');
        } else {
            const userinfo = store.getters.info;
            if (userinfo) {
                next();
            } else {
                try {
                    await store.dispatch('user/info');
                    next();
                } catch (error) {
                    await store.dispatch('user/reset');
                    ElMessage({
                        showClose: true,
                        message: error ?? 'Verification failed, please Login again.',
                        type: 'error'
                    });
                    next(toLogin(path));
                }
            }
        }
    } else {
        next(PERMITS.includes(path) ? undefined : toLogin(path));
    }
});

router.afterEach(NProgress.done);
