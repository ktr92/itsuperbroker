export default {
  async fetch ({ dispatch, commit }, id) {
    try {
      await this.$axios.get(`${process.env.api}/partner/broker/list?page=1&limit=10`).then((response) => {
        commit('setbrokers', response.data.data)
      })
    } catch (e) {
      dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
    }
  }
}
