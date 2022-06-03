export default {
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
