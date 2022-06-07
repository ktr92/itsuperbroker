import { GETTER_GETONE } from '@/store/getter-types'
import { ACTION_FETCH, ACTION_CREATE, ACTION_REMOVE } from '@/store/action-types'
import { MUTATION_SET, MUTATION_ADD, MUTATION_REMOVE } from '@/store/mutation-types'

export default {
  async [ACTION_FETCH] ({ dispatch, commit }) {
    try {
      await this.$axios.get(`${process.env.api}/bank/manager/list?page=1&limit=30`).then((response) => {
        commit(MUTATION_SET, response.data.data)
      })
    } catch (e) {
      dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
    }
  },
  async [ACTION_CREATE] ({ dispatch, commit }, payload) {
    try {
      await this.$axios.post(`${process.env.api}/bank/manager`, payload).then((response) => {
        dispatch('setMessage', { value: `${response.data.email} добавлен`, type: 'info' }, { root: true })
        commit(MUTATION_ADD, response.data)
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
