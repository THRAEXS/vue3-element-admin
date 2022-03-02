import router from '.';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { getPageTitle } from '@/utils';

NProgress.configure({ showSpinner: false });

console.log(import.meta.env);

router.beforeEach((to, from, next) => {
    NProgress.start();
    document.title = getPageTitle(to.meta?.title);
    next();
});

router.afterEach(() => {
    // finish progress bar
    NProgress.done();
});
