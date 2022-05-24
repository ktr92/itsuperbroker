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
    data: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      items: [],
      selected: []
    }
  },
  mounted () {
    this.items = [...new Map(this.data.map(v => [v.id, v])).values()]
    this.selected = this.items.map(i => i.id)
  },
  methods: {
    change () {
      this.$emit('filterlist', this.selected)
    }
  }
}
</script>

<style></style>
