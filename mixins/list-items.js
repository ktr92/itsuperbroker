export default {
  props: {
    list: {
      type: Array,
      default: []
    },
    filterby: {
      type: String,
      default: null
    },
    searchby: {
      type: Array,
      default: null
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
  },
  methods: {
    filter (data) {
      this.itemsfilter = data
    }
  }
}
