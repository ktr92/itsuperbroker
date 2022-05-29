<template>
  <div>
    <div v-for="item in items" :key="item.id" class="inline-block mb-2 mr-2">
      <label class="cursor-pointer">
        <input
          v-model="selected"
          class="opacity-0 w-0"
          :value="item.id"
          type="checkbox"
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
import { uniqBy } from 'lodash'

// компонент чекбокс-фильтра передает родителю массив из `id` выбранных значений
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
      return uniqBy(this.data, 'id') // убираем дубликаты
    }
  },
  watch: {
    selected () {
      this.$emit('filterlist', this.selected)
    }
  }
}
</script>

<style></style>
