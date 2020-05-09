
const notebooks = [
  { 'id': 1, 'notebook_name': 'my book 1', 'childrens': [
    { 'id': 4, 'notebook_name': 'my book 4', 'childrens': [
      { 'id': 5, 'notebook_name': 'my book 5', 'childrens': [] },
      { 'id': 6, 'notebook_name': 'my book 6', 'childrens': [] }
    ] }
  ]
  },
  { 'id': 2, 'notebook_name': 'my book 2', 'childrens': [] },
  { 'id': 3, 'notebook_name': 'my book 3', 'childrens': [
    { 'id': 7, 'notebook_name': 'my book 7', 'childrens': [] },
    { 'id': 8, 'notebook_name': 'my book 8', 'childrens': [] },
    { 'id': 9, 'notebook_name': 'my book 9', 'childrens': [] }
  ]
  }
]

export default [

  // get user info
  {
    url: '/note',
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
