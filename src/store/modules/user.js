import user from '@/api/user';
import { Cookie } from '@/utils';

const defaultState = () => ({
    token: Cookie.getToken(),
    user: null
});

const state = defaultState();

const mutations = {
    RESET_STATE: state => Object.assign(state, defaultState()),
    SET_TOKEN: (state, token) => (state.token = token),
    SET_USER: (state, data) => (state.user = data)
};

const actions = {
    login({ commit }, data) {
        return new Promise((resolve, reject) => {
            user.login(data).then(res => {
                commit('SET_TOKEN', res.data);
                Cookie.setToken(res.data);
                resolve();
            }).catch(reject);
        });
    },
    info({ commit }) {
        return new Promise((resolve, reject) => {
            user.info().then(({ data }) => {
                commit('SET_USER', data);
                resolve(data);
            }).catch(reject);
        });
    },
    logout({ commit }) {
        return new Promise((resolve, reject) => {
            user.logout().then(({ data }) => {
                Cookie.removeToken();
                commit('RESET_STATE');
                resolve(data);
            }).catch(reject);
        });
    },
    reset({ commit }) {
        return Promise(resolve => {
            Cookie.removeToken();
            commit('RESET_STATE');
            resolve();
        });
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
