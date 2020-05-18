
const notebooks = [
  { 'id': 1, 'notebook_name': '私人笔记1', 'childrens': [
    { 'id': 4, 'notebook_name': '我的笔记4', 'childrens': [
      { 'id': 5, 'notebook_name': '我的笔记5', 'childrens': [] },
      { 'id': 6, 'notebook_name': '我的笔记6', 'childrens': [] }
    ] }
  ]
  },
  { 'id': 2, 'notebook_name': '我的笔记2', 'childrens': [] },
  { 'id': 3, 'notebook_name': '我的笔记3', 'childrens': [
    { 'id': 7, 'notebook_name': '我的笔记7', 'childrens': [] },
    { 'id': 8, 'notebook_name': '我的笔记8', 'childrens': [] },
    { 'id': 9, 'notebook_name': '我的笔记9', 'childrens': [] }
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
