import request from '@/utils/request'

export function getNoteList(token, notebook_id) {
  return request({
    url: '/api/v1/note',
    method: 'get',
    params: { token, notebook_id }
  })
}
