import { getNoteList } from '@/api/note'

const getDefaultState = () => {
  return {
    notes: []
  }
}

const state = getDefaultState()

const mutations = {
  SET_NOTELIST: (state, notelist) => {
    state.notes = notelist
  }
}

const actions = {

  // get user info
  getNoteList({ commit, state }, notebookid) {
    return new Promise((resolve, reject) => {
      getNoteList(state.token, notebookid).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const { notes } = data

        commit('SET_NOTELIST', notes)

        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

