import user from '@/api/user';
import { Cookie } from '@/utils';

const state = () => {
    return {
        token: Cookie.getToken()
    };
};

const mutations = {
    SET_TOKEN: (state, token) => (state.token = token)
};

const actions = {
    login({ commit }, data) {
        // const { username, password } = data;
        return new Promise((resolve, reject) => {
            user.login(data).then(res => {
                commit('SET_TOKEN', res.data);
                Cookie.setToken(res.data);
                resolve();
            }).catch(error => reject(error));
        });
    },
    info() {
        console.log('info:', arguments);
    },
    logout() {
        console.log('logout:', arguments);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
};
