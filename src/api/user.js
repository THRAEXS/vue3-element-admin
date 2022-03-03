// import { request } from '@/utils';

export async function login(data) {
    /* return request({
        url: '/api/thraex/user/login',
        method: 'POST',
        data
    }); */

    const { username, password } = data;

    // console.log('request login:', username, password);
    return username === 'master' && password === '111111' ? {
        code: 20000,
        data: `${username.toUpperCase()}-TOKEN`
    } : {
        code: 40001,
        message: 'Account and password are incorrect.'
    };
}

export async function info() {
    /* return request({
        url: '/api/thraex/user',
        method: 'GET'
    }); */

    return {
        code: 20000,
        data: {
            id: 'MASTER-ID',
            name: 'Master',
            username: 'master',
            roles: ['admin']
        }
    };
}

export async function logout() {
    /* return request({
        url: '/api/thraex/user/logout',
        method: 'POST'
    }); */

    return {
        code: 20000,
        data: true
    };
}

export default { login, info, logout };
