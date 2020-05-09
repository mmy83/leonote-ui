
const notes = [
  { 'id': 1, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 1', 'created': '2020-05-09 12:12:12' },
  { 'id': 2, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 2', 'created': '2020-05-09 12:12:12' },
  { 'id': 3, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 3', 'created': '2020-05-09 12:12:12' },
  { 'id': 4, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 4', 'created': '2020-05-09 12:12:12' },
  { 'id': 5, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 5', 'created': '2020-05-09 12:12:12' },
  { 'id': 6, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 6', 'created': '2020-05-09 12:12:12' },
  { 'id': 7, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 7', 'created': '2020-05-09 12:12:12' },
  { 'id': 8, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 8', 'created': '2020-05-09 12:12:12' },
  { 'id': 9, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 9', 'created': '2020-05-09 12:12:12' }
]

export default [

  // get user info
  {
    url: '/note',
    type: 'get',
    response: config => {
      // mock error
      if (!notes) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }
      return {
        code: 20000,
        data: {
          notes: notes
        }
      }
    }
  }

]
