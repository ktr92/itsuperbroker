import { MUTATION_ADD, MUTATION_SET, MUTATION_REMOVE } from '@/store/mutation-types'
export default {
  [MUTATION_SET] (state, payload) {
    state.managers = payload
  },
  [MUTATION_ADD] (state, payload) {
    state.managers.push(payload)
  },
  [MUTATION_REMOVE] (state, payload) {
    state.managers = state.managers.filter(item => item.id !== payload)
  }
}
