import { GETTER_GETALL, GETTER_GETONE } from '@/store/getter-types'
export default {
  [GETTER_GETALL]: state => state.brokers,
  [GETTER_GETONE]: state => id => state.brokers.find(item => item.id === id)
}
