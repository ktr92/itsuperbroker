export default {
  props: {
    list: {
      type: Array,
      default: []
    },
    filterby: {
      type: Array,
      default: []
    },
    searchby: {
      type: Array,
      default: null
    },
    namespace: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      searchprop: this.searchby,
      filterprop: this.filterby,
      items: this.list,
      itemsfilter: this.list,
      filterdata: [],
      searchdata: []
    }
  },
  watch: {
    list () {
      this.itemsfilter = this.list
      this.items = this.list
    }
  }
}
