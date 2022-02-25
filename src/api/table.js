import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/api/fund/table/list',
    method: 'get',
    params
  })
}
