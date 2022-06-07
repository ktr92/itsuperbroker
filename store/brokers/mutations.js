import { MUTATION_SET, MUTATION_ADD, MUTATION_REMOVE } from '@/store/mutation-types'

export default {
  [MUTATION_SET] (state, payload) {
    state.brokers = payload
  },
  [MUTATION_ADD] (state, payload) {
    state.brokers.push(payload)
  },
  [MUTATION_REMOVE] (state, payload) {
    state.brokers = state.brokers.filter(item => item.id !== payload)
  }
}
