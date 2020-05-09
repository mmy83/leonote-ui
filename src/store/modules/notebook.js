import { getNoteBooks } from '@/api/notebook'

const getDefaultState = () => {
  return {
    notebooks: [],
    currentNoteBook: {}
  }
}

const state = getDefaultState()

const mutations = {
  SET_NOTEBOOKS: (state, notebooks) => {
    state.notebooks = notebooks
  },
  SET_CURRENTNOTEBOOK: (state, notebook) => {
    state.currentNoteBook = notebook
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
        commit('SET_CURRENTNOTEBOOK', notebooks[0])

        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  setCurrentNoteBook({ commit }, notebook) {
    console.log(notebook)
    commit('SET_CURRENTNOTEBOOK', notebook)
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

