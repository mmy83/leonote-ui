import request from '@/utils/request'

export function getNoteBooks(token) {
  return request({
    url: '/v1/notebook',
    method: 'get',
    params: { token }
  })
}
