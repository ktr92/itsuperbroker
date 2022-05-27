<template>
  <div>
    <div v-for="item in items" :key="item.id" class="inline-block mb-2 mr-2">
      <label class="cursor-pointer">
        <input
          v-model="selected"
          class="opacity-0 w-0"
          :value="item.id"
          type="checkbox"
          @change="change"
        >
        <span
          class="rounded border-2 px-2 border-gray-200 opacity-50 inline-block"
          :class="{'bg-green-500 border-green-500 text-white opacity-100': selected.includes(item.id)}"
        >
          {{ item.name }}
        </span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filterby: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      data: this.filterby,
      selected: []
    }
  },
  computed: {
    items () {
      // убираем дубликаты
      return [...new Map(this.data.map(v => [v.id, v])).values()] || []
    }
  },

  methods: {
    change () {
      this.$emit('filterlist', this.selected)
    }
  }
}
</script>

<style></style>
