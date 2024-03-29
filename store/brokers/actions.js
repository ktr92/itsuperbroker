import { GETTER_GETONE } from '@/store/getter-types'
import { ACTION_FETCH, ACTION_CREATE, ACTION_REMOVE } from '@/store/action-types'
import { MUTATION_ADD, MUTATION_REMOVE, MUTATION_SET } from '@/store/mutation-types'

export default {
  async [ACTION_FETCH] ({ dispatch, commit, state }) {
    try {
      await this.$axios.get(`${process.env.api}/partner/broker/list?page=1&limit=10`).then((response) => {
        commit(MUTATION_SET, response.data.data)
      })
    } catch (e) {
      commit(MUTATION_SET, state.brokers) // временная мера
      dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
    }
  },
  async [ACTION_CREATE] ({ dispatch, commit }, payload) {
    try {
      await this.$axios.post(`${process.env.api}/bank/manager`, payload).then((response) => {
        dispatch('setMessage', { value: `${response.data.email} добавлен`, type: 'info' }, { root: true })
        commit(MUTATION_ADD, payload)
      })
    } catch (e) {
      dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
    }
  },
  async [ACTION_REMOVE] ({ dispatch, commit, getters }, payload) {
    try {
      await this.$axios.delete(`${process.env.api}/bank/manager/${payload}`).then((response) => {
        dispatch('setMessage', { value: `${getters[GETTER_GETONE](payload).email} удален`, type: 'warning' }, { root: true })
        commit(MUTATION_REMOVE, payload)
      })
    } catch (e) {
      dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
    }
  }
}
