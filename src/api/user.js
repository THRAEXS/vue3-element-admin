import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/fund/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/api/fund/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/api/fund/user/logout',
    method: 'post'
  })
}
