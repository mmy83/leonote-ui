
const notes = [
  { 'id': 1, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 1', 'created': '2020-05-09 12:12:12' },
  { 'id': 2, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 2', 'created': '2020-05-09 12:12:12' },
  { 'id': 3, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 3', 'created': '2020-05-09 12:12:12' },
  { 'id': 4, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 4', 'created': '2020-05-09 12:12:12' },
  { 'id': 5, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 5', 'created': '2020-05-09 12:12:12' },
  { 'id': 6, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 6', 'created': '2020-05-09 12:12:12' },
  { 'id': 7, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 7', 'created': '2020-05-09 12:12:12' },
  { 'id': 8, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 8', 'created': '2020-05-09 12:12:12' },
  { 'id': 9, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 9', 'created': '2020-05-09 12:12:12' },
  { 'id': 10, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 10', 'created': '2020-05-09 12:12:12' },
  { 'id': 11, 'notebook': { 'id': 2, 'notebook_name': 'my book 2' }, 'title': 'my note 11', 'created': '2020-05-09 12:12:12' },
  { 'id': 12, 'notebook': { 'id': 2, 'notebook_name': 'my book 2' }, 'title': 'my note 12', 'created': '2020-05-09 12:12:12' },
  { 'id': 13, 'notebook': { 'id': 2, 'notebook_name': 'my book 2' }, 'title': 'my note 13', 'created': '2020-05-09 12:12:12' },
  { 'id': 14, 'notebook': { 'id': 2, 'notebook_name': 'my book 2' }, 'title': 'my note 14', 'created': '2020-05-09 12:12:12' },
  { 'id': 15, 'notebook': { 'id': 2, 'notebook_name': 'my book 2' }, 'title': 'my note 15', 'created': '2020-05-09 12:12:12' },
  { 'id': 16, 'notebook': { 'id': 2, 'notebook_name': 'my book 2' }, 'title': 'my note 16', 'created': '2020-05-09 12:12:12' },
  { 'id': 17, 'notebook': { 'id': 2, 'notebook_name': 'my book 2' }, 'title': 'my note 17', 'created': '2020-05-09 12:12:12' },
  { 'id': 18, 'notebook': { 'id': 2, 'notebook_name': 'my book 2' }, 'title': 'my note 18', 'created': '2020-05-09 12:12:12' },
  { 'id': 19, 'notebook': { 'id': 2, 'notebook_name': 'my book 2' }, 'title': 'my note 19', 'created': '2020-05-09 12:12:12' }
]

export default [

  // get user info
  {
    url: '/v1/note/list',
    type: 'get',
    response: config => {
      const { notebook_id } = config.query
      // mock error
      const noteres = []

      for (let i in notes) {
        if (notes[i].notebook.id == notebook_id) {
          noteres.push(notes[i])
        }

      }
      return {
        code: 20000,
        data: {
          notes: noteres
        }
      }
    }
  },
  {
    url: '/v1/note/\\d',
    type: 'get',
    response: config => {
      // const { id } = config.params
      // console.log(config.params)
      // console.log(config.path)
      const path = config.path
      const key = path.match(/\/(\d+)/)[1]
      // mock error
      if (!notes[key - 1]) {
        return {
          code: 20000,
          data: {
            note: notes[0]
          }
        }
      }
      return {
        code: 20000,
        data: {
          note: notes[key - 1]
        }
      }
    }
  },
  {
    url: '/v1/note/create',
    type: 'post',
    response: config => {
      const { notebook_id } = config.params
      // console.log(config.params)

      return {
        code: 20000,
        data: {
          note: {
            'id': 1,
            'notebook': {
              'id': notebook_id,
              'notebook_name': 'my book 1'
            },
            'title': '',
            'created': '2020-05-09 12:12:12'
          }
        }
      }
    }
  }

]
