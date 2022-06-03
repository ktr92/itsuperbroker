
export const state = () => ({
  managers: [],
  headers: ['Имя', 'Фамилия', 'Отчество', 'Email', 'Телефон', 'Банк']
})

export const mutations = {
  setManagers (state, payload) {
    state.managers = payload
  },
  addManager (state, payload) {
    state.managers.push(payload)
  },
  removeManager (state, payload) {
    state.managers = state.managers.filter(item => item.id !== payload)
  }
}

export const actions = {
  async fetch ({ dispatch, commit }, id) {
    try {
      await this.$axios.get(`${process.env.api}/bank/manager/list?page=1&limit=30`).then((response) => {
        commit('setManagers', response.data.data)
      })
    } catch (e) {
      dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
    }
  },
  async add ({ dispatch, commit }, payload) {
    try {
      await this.$axios.post(`${process.env.api}/bank/manager`, payload).then((response) => {
        dispatch('setMessage', { value: `${response.data.email} добавлен`, type: 'info' }, { root: true })
        commit('addManager', response.data)
      })
    } catch (e) {
      dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
    }
  },
  async remove ({ dispatch, commit, getters }, payload) {
    try {
      await this.$axios.delete(`${process.env.api}/bank/manager/${payload}`).then((response) => {
        dispatch('setMessage', { value: `${getters.managerById(payload).email} удален`, type: 'warning' }, { root: true })
        commit('removeManager', payload)
      })
    } catch (e) {
      dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
    }
  }
}

export const getters = {
  managers: state => state.managers,
  banks: state => state.managers.map(item => item.bank),
  managerById: state => id => state.managers.find(item => item.id === id),
  managerHeaders: state => state.headers
}
