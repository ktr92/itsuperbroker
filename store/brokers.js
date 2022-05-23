export const state = () => ({
  brokers: []
})

export const mutations = {
  setbrokers (state, payload) {
    state.brokers = payload
  }
}

export const actions = {
  async fetch ({ dispatch, commit }, id) {
    try {
      const data = await this.$axios.get('https://api-broker.demo.ipotech.su/api/v1/partner/broker/list?page=1&limit=10')
      commit('setbrokers', data.data.data)
    } catch (e) {
      dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
    }
  }
}

export const getters = {
  brokers: state => state.brokers,
  brokerid: state => id => state.brokers.find(item => item.id === id)
}
