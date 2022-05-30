<template>
  <div>
    <AppSearch @searchlist="searchlist" />
    <AppFilter :key="items.length" :filterby="banks" @filterlist="filterlist" />
  </div>
</template>

<script>
import { intersectionBy } from 'lodash'
// компонент для фильтрации данных
export default {
  props: {
    filtered: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      items: this.filtered,
      filterdata: [],
      searchdata: []
    }
  },
  computed: {
    banks () {
      return this.items.map(item => item.bank)
    },
    // итоговые данные для вывода = пересечение массивов данных по фильтру и поиску
    itemsSelected () {
      return intersectionBy(this.items, this.itemsSearch, this.itemsFiltered, 'id') || this.items
    },
    //  данные по чекбокс фильтру
    itemsFiltered () {
      return this.filterdata.length ? this.items.filter(item => this.filterdata.includes(item.bank.id)) : this.items
    },
    // данные по поиску
    itemsSearch () {
      return this.items.filter(item => this.findby(item, ['email', 'phone', 'firstName', 'lastName', 'middleName'])) || this.items
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
    // поиск в массиве данных по какому-либо из полей fields, которые соответствуют запросу (this.searchdata)
    findby (obj, fields) {
      return fields.some(item => obj[item].toLowerCase().includes(this.searchdata))
    },
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
