
const notebooks = [
  { 'id': 1, 'notebook_name': '私人笔记1', 'count': 10, 'childrens': [
    { 'id': 4, 'notebook_name': '我的笔记4', 'count': 40, 'childrens': [
      { 'id': 5, 'notebook_name': '我的笔记5', 'count': 50, 'childrens': [] },
      { 'id': 6, 'notebook_name': '我的笔记6', 'count': 60, 'childrens': [] }
    ] }
  ]
  },
  { 'id': 2, 'notebook_name': '我的笔记2', 'count': 20, 'childrens': [] },
  { 'id': 3, 'notebook_name': '我的笔记3', 'count': 30, 'childrens': [
    { 'id': 7, 'notebook_name': '我的笔记7', 'count': 70, 'childrens': [] },
    { 'id': 8, 'notebook_name': '我的笔记8', 'count': 80, 'childrens': [] },
    { 'id': 9, 'notebook_name': '我的笔记9', 'count': 90, 'childrens': [] }
  ]
  }
]

export default [

  {
    url: '/v1/notebook',
    type: 'get',
    response: config => {
      // mock error
      if (!notebooks) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: {
          notebooks: notebooks
        }
      }
    }
  }

]
