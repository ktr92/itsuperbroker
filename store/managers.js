export const state = () => ({
  managers: []
})

export const mutations = {
  setManagers (state, payload) {
    state.managers = payload
  },
  addManager (state, payload) {
    state.managers.push(payload)
  }
}

export const actions = {
  async fetch ({ dispatch, commit }, id) {
    try {
      const data = await this.$axios.get('https://api-broker.demo.ipotech.su/api/v1/bank/manager/list?page=1&limit=30')
      commit('setManagers', data.data.data)
    } catch (e) {
      dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
    }
  },
  async add ({ dispatch, commit }, payload) {
    try {
      const response = await this.$axios.post('https://api-broker.demo.ipotech.su/api/v1/bank/manager', payload)
      if (response.data) {
        commit('addManager', response.data)
      }
    } catch (e) {
      dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
    }
  }
}

export const getters = {
  managers: state => state.managers
}
