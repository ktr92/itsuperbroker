export const state = () => ({
  managers: []
})

export const mutations = {
  setManagers (state, payload) {
    state.managers = payload
  }
}

export const actions = {
  async fetch ({ dispatch, commit }, id) {
    try {
      const data = await this.$axios.get('https://api-broker.demo.ipotech.su/api/v1/bank/manager/list?page=1&limit=10')
      commit('setManagers', data.data)
    } catch (e) {
      dispatch('setMessage', { value: 'Не удалось получить список менеджеров', type: 'error' }, { root: true })
    }
  }
}

export const getters = {
  managers: state => state.managers
}
