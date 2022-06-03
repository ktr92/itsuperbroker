<template>
  <div>
    <LazyAppSearch v-if="search" @searchlist="searchlist" />
    <LazyAppFilter v-if="filter" :filterby="filterprop" @filterlist="filterlist" />
  </div>
</template>

<script>
import { intersectionBy } from 'lodash'
import { helperFindby } from '../utils/helpers'
// компонент для фильтрации данных
export default {
  props: {
    filtered: {
      type: Array,
      default: null
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
      search: this.searchby,
      filter: this.filterby,
      items: this.filtered,
      filterdata: [],
      searchdata: []
    }
  },
  computed: {
    filterprop () {
      return this.items.map(item => item[this.filter])
    },
    // итоговые данные для вывода = пересечение массивов данных по фильтру и поиску
    itemsSelected () {
      return intersectionBy(this.items, this.itemsSearch, this.itemsFiltered, 'id') || this.items
    },
    // фильтр данных по чекбокс фильтру
    itemsFiltered () {
      return this.filterdata.length ? this.items.filter(item => this.filterdata.includes(item.bank.id)) : this.items
    },
    // фильтр данных по поиску
    itemsSearch () {
      return this.search ? this.items.filter(item => helperFindby(item, this.search, this.searchdata)) : this.items
    }
  },
  watch: {
    itemsSelected () {
      this.$emit('filter', this.itemsSelected)
    },
    filtered () {
      this.items = this.filtered
    }
  },
  methods: {
    // эмит из компонента AppFilter
    filterlist (data) {
      this.filterdata = data
    },
    // эмит из компонента AppSearch
    searchlist (data) {
      this.searchdata = data
    }
  }
}
</script>

<style>

</style>
