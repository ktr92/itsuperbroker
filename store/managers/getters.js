import { GETTER_GETALL, GETTER_GETONE, GETTER_GETTOTAL, GETTER_GETPERPAGE, GETTER_GETPAGE, GETTER_GETBANKS, GETTER_GETBANKID } from '@/store/getter-types'
export default {
  [GETTER_GETALL]: state => state.managers,
  [GETTER_GETBANKS]: state => state.banks,
  [GETTER_GETBANKID]: state => state.bankId,
  [GETTER_GETTOTAL]: state => state.total,
  [GETTER_GETPAGE]: state => state.pageNumber,
  [GETTER_GETPERPAGE]: state => state.itemsPerPage,
  [GETTER_GETONE]: state => id => state.managers.find(item => item.id === id)
}
