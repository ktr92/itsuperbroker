<template>
  <div>
    <LazyListFilterSearch v-if="search" placeholder="Поиск по контактам" :searchlist.sync="searchdata" />
    <!--  <LazyListFilterCheckbox v-if="filter" :filterby="filterprop" @filterlist="filterlist" /> -->
    <LazyListFilterSelect v-if="filter" :filterby="filter" @selectFetch="selectFetch" @selectReset="selectReset" />
  </div>
</template>

<script>
import { intersectionBy } from 'lodash'
import { helperFindby } from '@/utils/helpers'
import { ACTION_FETCH } from '@/store/action-types'
import { GETTER_GETPAGE, GETTER_GETPERPAGE } from '@/store/getter-types'

// компонент для фильтрации данных
export default {
  props: {
    itemsfilter: {
      type: Array,
      default: null
    },
    filterby: {
      type: Array,
      default: null
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
      search: this.searchby,
      filter: this.filterby,
      items: this.itemsfilter,
      filterdata: [],
      searchdata: []
    }
  },
  computed: {
    // итоговые данные для вывода = пересечение массивов данных по фильтру и поиску
    itemsSelected () {
      return intersectionBy(this.items, this.itemsSearch, this.itemsFiltered, 'id') || this.items
    },
    // фильтр данных по чекбокс фильтру
    itemsFiltered () {
      return this.filterdata.length ? this.items.filter(item => this.filterdata.includes(item[this.filter].id)) : this.items
    },
    // фильтр данных по поиску
    itemsSearch () {
      return this.search ? this.items.filter(item => helperFindby(item, this.search, this.searchdata)) : this.items
    },
    getPage () {
      return this.$store.getters[`${this.namespace}/${GETTER_GETPAGE}`]
    },
    getPerPage () {
      return this.$store.getters[`${this.namespace}/${GETTER_GETPERPAGE}`]
    }
  },
  watch: {
    itemsSelected () {
      this.$emit('update:itemsfilter', this.itemsSelected)
    },
    filtered () {
      this.items = this.filtered
    }
  },
  methods: {
    // эмит из компонента ListFilterCheckbox
    filterlist (data) {
      this.filterdata = data
    },
    // эмит из компонента ListFilterSelect
    async selectFetch (selected) {
      await this.$store.dispatch(`${this.namespace}/${ACTION_FETCH}`, { currentPage: this.getPage, itemsPerPage: this.getPerPage, bankId: selected })
    },
    async selectReset () {
      await this.$store.dispatch(`${this.namespace}/${ACTION_FETCH}`, { currentPage: this.getPage, itemsPerPage: this.getPerPage, bankId: 0 })
    }
  }
}
</script>

<style>

</style>
