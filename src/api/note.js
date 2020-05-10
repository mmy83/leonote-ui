import request from '@/utils/request'

export function getNoteList(token, notebook_id) {
  return request({
    url: '/v1/note/list',
    method: 'get',
    params: { token, notebook_id }
  })
}

export function getNote(token, id) {
  return request({
    url: '/v1/note/' + id,
    method: 'get',
    params: { token }
  })
}
