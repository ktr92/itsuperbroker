<template>
  <div v-if="data">
    <div class="inline-block mb-2 mr-2">
      <label class="checkbox" @click="reset">
        <span
          class="reset"
        >
          Сбросить
        </span>
      </label>
    </div>
    <div v-for="item in items" :key="item.id" class="inline-block mb-2 mr-2">
      <label class="checkbox">
        <input
          v-model="selected"
          :value="item.id"
          type="checkbox"
        >
        <span
          :class="{'selected': selected.includes(item.id)}"
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
      require: true,
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
    },
    filterby () {
      this.data = this.filterby
    }
  },
  methods: {
    reset () {
      this.selected = []
    }
  }
}
</script>

<style>
  label {
    @apply block mb-2
  }

  .checkbox {
    @apply cursor-pointer
  }

  .checkbox span {
    @apply rounded border-2 px-2 border-gray-200 opacity-50 inline-block
  }

  .checkbox input {
    @apply opacity-0 w-0
  }

  .checkbox span.selected {
    @apply bg-green-500 border-green-500 text-white opacity-100
  }

  .checkbox span.reset {
    @apply rounded border-2 px-2 border-green-500 opacity-100 inline-block
  }
</style>
