import { createStore, createLogger } from 'vuex';
import getters from './getters';
import user from './modules/user';

const debug = process.env.NODE_ENV !== 'production';

export default createStore({
    modules: {
        user
    },
    getters,
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
