import request from '@/utils/request';

export function demoApi() {
    return request({
        url: '/api/funds/path/to/any',
        method: 'GET'
    });
}
