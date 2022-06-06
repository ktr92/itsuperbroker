<template>
  <div>
    <div v-if="items.length" class="w-full p-4">
      <h1 class="my-4">
        <slot name="title" />
      </h1>
      <div>
        <LazyListFilterGroup v-if="items.length" :filtered="items" :filterby="filterprop" :searchby="searchprop" @filter="filter" />
        <template
          v-if="itemsfilter.length"
          class="my-4"
        >
          <slot name="items" :items="itemsfilter" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
// компонент для вывода фильтрованных данных
export default {
  props: {
    list: {
      type: Array,
      required: true
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
</script>

<style>

</style>
