import { MUTATION_ADD, MUTATION_SET, MUTATION_REMOVE, MUTATION_TOTAL, MUTATION_PAGENUMBER, MUTATION_SETBANK, MUTATION_SETBANKID, MUTATION_PERPAGE } from '@/store/mutation-types'
export default {
  [MUTATION_SET] (state, payload) {
    state.managers = payload
  },
  [MUTATION_ADD] (state, payload) {
    state.managers.push(payload)
  },
  [MUTATION_REMOVE] (state, payload) {
    state.managers = state.managers.filter(item => item.id !== payload)
  },
  [MUTATION_TOTAL] (state, payload) {
    state.total = payload
  },
  [MUTATION_PAGENUMBER] (state, payload) {
    state.pageNumber = payload
  },
  [MUTATION_PERPAGE] (state, payload) {
    state.itemsPerPage = payload
  },
  [MUTATION_SETBANK] (state, payload) {
    state.banks = payload
  },
  [MUTATION_SETBANKID] (state, payload) {
    state.bankId = payload
  }
}
