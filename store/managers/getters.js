import { GETTER_GETALL, GETTER_GETONE } from '@/store/getter-types'
export default {
  [GETTER_GETALL]: state => state.managers,
  [GETTER_GETONE]: state => id => state.managers.find(item => item.id === id)
}
