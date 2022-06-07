import { FETCH, CREATE_IND } from '@/store/action-types'

export default {
  async [FETCH] ({ dispatch, commit }, id) {
    try {
      await this.$axios.get(`${process.env.api}/partner/broker/list?page=1&limit=10`).then((response) => {
        commit('setbrokers', response.data.data)
      })
    } catch (e) {
      dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
    }
  },
  async [CREATE_IND] ({ dispatch, commit }, payload) {
    try {
      await this.$axios.post(`${process.env.api}/partner/individual`, payload).then((response) => {
        dispatch('setMessage', { value: `${response.data.name} добавлен`, type: 'info' }, { root: true })
        commit('addIndividual', response.data)
      })
    } catch (e) {
      dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
    }
  }
}
