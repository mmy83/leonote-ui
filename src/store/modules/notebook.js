import { getNoteBooks } from '@/api/notebook'

const getDefaultState = () => {
  return {
    notebooks: [],
    notebookid: 0
  }
}

const state = getDefaultState()

const mutations = {
  SET_NOTEBOOKS: (state, notebooks) => {
    state.notebooks = notebooks
  },
  SET_NOTEBOOK: (state, notebook) => {
    state.notebook = notebook
  }
}

const actions = {

  // get user info
  getNoteBooks({ commit, state }) {
    return new Promise((resolve, reject) => {
      getNoteBooks(state.token).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }
        const { notebooks } = data

        commit('SET_NOTEBOOKS', notebooks)
        commit('SET_NOTEBOOK', notebooks[0])

        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

