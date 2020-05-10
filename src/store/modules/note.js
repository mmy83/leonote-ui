import { getNote, getNoteList } from '@/api/note'

const getDefaultState = () => {
  return {
    notes: [],
    currentNote: {}
  }
}

const state = getDefaultState()

const mutations = {
  SET_NOTELIST: (state, notelist) => {
    state.notes = notelist
  },
  SET_CURRENTNOTE: (state, note) => {
    state.currentNote = note
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
  },
  getNote({ commit, state }, id) {
    return new Promise((resolve, reject) => {
      getNote(state.token, id).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }
        const { note } = data
        console.log(note)
        commit('SET_CURRENTNOTE', note)
        resolve(data)
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

