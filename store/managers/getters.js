import { GETTER_GETALL, GETTER_GETONE, GETTER_GETTOTAL, GETTER_GETPERPAGE, GETTER_GETPAGE } from '@/store/getter-types'
export default {
  [GETTER_GETALL]: state => state.managers,
  [GETTER_GETTOTAL]: state => state.total,
  [GETTER_GETPAGE]: state => state.pageNumber,
  [GETTER_GETPERPAGE]: state => state.itemsPerPage,
  [GETTER_GETONE]: state => id => state.managers.find(item => item.id === id)
}
