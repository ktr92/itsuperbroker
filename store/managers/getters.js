import { GETTER_GETALL, GETTER_GETONE, GETTER_GETTOTAL } from '@/store/getter-types'
export default {
  [GETTER_GETALL]: state => state.managers,
  [GETTER_GETTOTAL]: state => state.total,
  [GETTER_GETONE]: state => id => state.managers.find(item => item.id === id)
}
