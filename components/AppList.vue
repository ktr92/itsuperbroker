<template>
  <div>
    <div v-if="items.length" class="w-full p-4">
      <h1 class="my-4">
        <slot name="title" />
      </h1>
      <div>
        <LazyAppFilterGroup v-if="items.length" :filtered="items" @filter="filter" />
        <table
          v-if="itemsfilter.length"
          class="my-4"
        >
          <slot name="header" :headers="headers" />
          <tbody>
            <template
              v-for="item in itemsfilter"
              class="p-4 text-sm"
            >
              <slot name="item" :item="item" />
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// компонент для вывода таблицы данных
export default {
  props: {
    list: {
      type: Array,
      required: true
    },
    headerlist: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      headers: this.headerlist,
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
