import { request } from '@/utils';

export async function login(data) {
    /* return request({
        url: '/api/thraex/user/login',
        method: 'POST',
        data
    }); */

    const { username, password } = data;

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
            name: 'Master',
            roles: ['admin']
        }
    };
}

export function logout() {
    return request({
        url: '/api/thraex/user/logout',
        method: 'POST'
    });
}