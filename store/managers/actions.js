import { GETTER_GETONE, GETTER_GETPAGE, GETTER_GETPERPAGE } from '@/store/getter-types'
import { ACTION_FETCH, ACTION_CREATE, ACTION_REMOVE } from '@/store/action-types'
import { MUTATION_SET, /* MUTATION_ADD, MUTATION_REMOVE, */ MUTATION_TOTAL } from '@/store/mutation-types'

export default {
  async [ACTION_FETCH] ({ dispatch, commit }, payload) {
    try {
      await this.$axios.get(`${process.env.api}/bank/manager/list?page=${payload.currentPage}&limit=${payload.itemsPerPage}`).then((response) => {
        commit(MUTATION_SET, response.data.data)
        commit(MUTATION_TOTAL, response.data.totalItems)
      })
    } catch (e) {
      dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
    }
  },
  async [ACTION_CREATE] ({ dispatch, commit, getters }, payload) {
    try {
      await this.$axios.post(`${process.env.api}/bank/manager`, payload).then((response) => {
        dispatch('setMessage', { value: `${response.data.email} добавлен`, type: 'info' }, { root: true })
        dispatch(ACTION_FETCH, { currentPage: getters[GETTER_GETPAGE], itemsPerPage: getters[GETTER_GETPERPAGE] })
        /* commit(MUTATION_ADD, response.data) */
      })
    } catch (e) {
      dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
    }
  },
  async [ACTION_REMOVE] ({ dispatch, commit, getters }, payload) {
    try {
      await this.$axios.delete(`${process.env.api}/bank/manager/${payload}`).then((response) => {
        dispatch('setMessage', { value: `${getters[GETTER_GETONE](payload).email} удален`, type: 'warning' }, { root: true })
        dispatch(ACTION_FETCH, { currentPage: getters[GETTER_GETPAGE], itemsPerPage: getters[GETTER_GETPERPAGE] })
        /* commit(MUTATION_REMOVE, payload) */
      })
    } catch (e) {
      dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
    }
  }
}
