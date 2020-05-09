
const notes = [
  { 'id': 1, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'note_name': 'my note 1' },
  { 'id': 2, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'note_name': 'my note 2' },
  { 'id': 3, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'note_name': 'my note 3' },
  { 'id': 4, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'note_name': 'my note 4' },
  { 'id': 5, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'note_name': 'my note 5' },
  { 'id': 6, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'note_name': 'my note 6' },
  { 'id': 7, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'note_name': 'my note 7' },
  { 'id': 8, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'note_name': 'my note 8' },
  { 'id': 9, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'note_name': 'my note 9' }
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
