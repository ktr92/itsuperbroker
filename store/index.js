export const state = () => ({
  message: null,
  showModal: false
})

export const actions = {
  // добавление сообщения об ошибке, и удаление через 5 сек
  setMessage ({ commit }, message) {
    commit('setMessage', message)
    setTimeout(() => {
      commit('clearMessage')
    }, 5000)
  },
  toggleModal ({ commit }) {
    commit('toggleModal')
  }
}

export const mutations = {
  setMessage (state, message) {
    state.message = message
  },
  clearMessage (state) {
    state.message = null
  },
  toggleModal (state) {
    state.showModal = !state.showModal
  }
}

export const getters = {
  message: state => state.message,
  showModal: state => state.showModal
}
