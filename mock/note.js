
const notes = [
  { 'id': 1, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 1', 'summary': 'summary summary summary', 'created': '2020-05-09 12:12:12', 'updated': '2020-05-09 12:12:12', 'content': 'my note 1 count my note 1 count my note 1 count my note 1 count my note 1 count my note 1 count', 'ismd': 1, 'tags': [{ 'id': 1, 'tag_name': '001' }, { 'id': 2, 'tag_name': '002' }] },
  { 'id': 2, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 2', 'summary': 'summary summary summary', 'created': '2020-05-09 12:12:12', 'updated': '2020-05-09 12:12:12', 'content': 'my note 2 count', 'ismd': 0, 'tags': [{ 'id': 1, 'tag_name': '001' }, { 'id': 2, 'tag_name': '002' }] },
  { 'id': 4, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 4', 'summary': 'summary summary summary', 'created': '2020-05-09 12:12:12', 'updated': '2020-05-09 12:12:12', 'content': 'my note 3 count', 'ismd': 0, 'tags': [{ 'id': 1, 'tag_name': '001' }, { 'id': 2, 'tag_name': '002' }] },
  { 'id': 3, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 3', 'summary': 'summary summary summary', 'created': '2020-05-09 12:12:12', 'updated': '2020-05-09 12:12:12', 'content': 'my note 4 count', 'ismd': 0, 'tags': [{ 'id': 1, 'tag_name': '001' }, { 'id': 2, 'tag_name': '002' }] },
  { 'id': 5, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 5', 'summary': 'summary summary summary', 'created': '2020-05-09 12:12:12', 'updated': '2020-05-09 12:12:12', 'content': 'my note 5 count', 'ismd': 0, 'tags': [{ 'id': 1, 'tag_name': '001' }, { 'id': 2, 'tag_name': '002' }] },
  { 'id': 6, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 6', 'summary': 'summary summary summary', 'created': '2020-05-09 12:12:12', 'updated': '2020-05-09 12:12:12', 'content': 'my note 6 count', 'ismd': 0, 'tags': [{ 'id': 1, 'tag_name': '001' }, { 'id': 2, 'tag_name': '002' }] },
  { 'id': 7, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 7', 'summary': 'summary summary summary', 'created': '2020-05-09 12:12:12', 'updated': '2020-05-09 12:12:12', 'content': 'my note 7 count', 'ismd': 0, 'tags': [{ 'id': 1, 'tag_name': '001' }, { 'id': 2, 'tag_name': '002' }] },
  { 'id': 8, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 8', 'summary': 'summary summary summary', 'created': '2020-05-09 12:12:12', 'updated': '2020-05-09 12:12:12', 'content': 'my note 8 count', 'ismd': 0, 'tags': [{ 'id': 1, 'tag_name': '001' }, { 'id': 2, 'tag_name': '002' }] },
  { 'id': 9, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 9', 'summary': 'summary summary summary', 'created': '2020-05-09 12:12:12', 'updated': '2020-05-09 12:12:12', 'content': 'my note 9 count', 'ismd': 0, 'tags': [{ 'id': 1, 'tag_name': '001' }, { 'id': 2, 'tag_name': '002' }] },
  { 'id': 10, 'notebook': { 'id': 1, 'notebook_name': 'my book 1' }, 'title': 'my note 10', 'summary': 'summary summary summary', 'created': '2020-05-09 12:12:12', 'updated': '2020-05-09 12:12:12', 'content': 'my note 10 count', 'ismd': 0, 'tags': [{ 'id': 1, 'tag_name': '001' }, { 'id': 2, 'tag_name': '002' }] },
  { 'id': 11, 'notebook': { 'id': 2, 'notebook_name': 'my book 2' }, 'title': 'my note 11', 'summary': 'summary summary summary', 'created': '2020-05-09 12:12:12', 'updated': '2020-05-09 12:12:12', 'content': 'my note 11 count', 'ismd': 0, 'tags': [{ 'id': 1, 'tag_name': '001' }, { 'id': 2, 'tag_name': '002' }] },
  { 'id': 12, 'notebook': { 'id': 2, 'notebook_name': 'my book 2' }, 'title': 'my note 12', 'summary': 'summary summary summary', 'created': '2020-05-09 12:12:12', 'updated': '2020-05-09 12:12:12', 'content': 'my note 12 count', 'ismd': 0, 'tags': [{ 'id': 1, 'tag_name': '001' }, { 'id': 2, 'tag_name': '002' }] },
  { 'id': 13, 'notebook': { 'id': 2, 'notebook_name': 'my book 2' }, 'title': 'my note 13', 'summary': 'summary summary summary', 'created': '2020-05-09 12:12:12', 'updated': '2020-05-09 12:12:12', 'content': 'my note 13 count', 'ismd': 0, 'tags': [{ 'id': 1, 'tag_name': '001' }, { 'id': 2, 'tag_name': '002' }] },
  { 'id': 14, 'notebook': { 'id': 2, 'notebook_name': 'my book 2' }, 'title': 'my note 14', 'summary': 'summary summary summary', 'created': '2020-05-09 12:12:12', 'updated': '2020-05-09 12:12:12', 'content': 'my note 14 count', 'ismd': 0, 'tags': [{ 'id': 1, 'tag_name': '001' }, { 'id': 2, 'tag_name': '002' }] },
  { 'id': 15, 'notebook': { 'id': 2, 'notebook_name': 'my book 2' }, 'title': 'my note 15', 'summary': 'summary summary summary', 'created': '2020-05-09 12:12:12', 'updated': '2020-05-09 12:12:12', 'content': 'my note 15 count', 'ismd': 0, 'tags': [{ 'id': 1, 'tag_name': '001' }, { 'id': 2, 'tag_name': '002' }] },
  { 'id': 16, 'notebook': { 'id': 2, 'notebook_name': 'my book 2' }, 'title': 'my note 16', 'summary': 'summary summary summary', 'created': '2020-05-09 12:12:12', 'updated': '2020-05-09 12:12:12', 'content': 'my note 16 count', 'ismd': 0, 'tags': [{ 'id': 1, 'tag_name': '001' }, { 'id': 2, 'tag_name': '002' }] },
  { 'id': 17, 'notebook': { 'id': 2, 'notebook_name': 'my book 2' }, 'title': 'my note 17', 'summary': 'summary summary summary', 'created': '2020-05-09 12:12:12', 'updated': '2020-05-09 12:12:12', 'content': 'my note 17 count', 'ismd': 0, 'tags': [{ 'id': 1, 'tag_name': '001' }, { 'id': 2, 'tag_name': '002' }] },
  { 'id': 18, 'notebook': { 'id': 2, 'notebook_name': 'my book 2' }, 'title': 'my note 18', 'summary': 'summary summary summary', 'created': '2020-05-09 12:12:12', 'updated': '2020-05-09 12:12:12', 'content': 'my note 18 count', 'ismd': 0, 'tags': [{ 'id': 1, 'tag_name': '001' }, { 'id': 2, 'tag_name': '002' }] },
  { 'id': 19, 'notebook': { 'id': 2, 'notebook_name': 'my book 2' }, 'title': 'my note 19', 'summary': 'summary summary summary', 'created': '2020-05-09 12:12:12', 'updated': '2020-05-09 12:12:12', 'content': 'my note 19 count', 'ismd': 0, 'tags': [{ 'id': 1, 'tag_name': '001' }, { 'id': 2, 'tag_name': '002' }] }
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
