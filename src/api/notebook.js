import request from '@/utils/request'

export function getNoteBooks(token) {
  return request({
    url: '/api/v1/notebook',
    method: 'get',
    params: { token }
  })
}
