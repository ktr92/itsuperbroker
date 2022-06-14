<template>
  <div v-if="data">
    <div>
      <div class="select">
        <div class="select__label" @click="isHidden = !isHidden">
          <span v-if="selected" class="select__items" :class="{'active': selected.name}">
            <img v-if="selected.logo" :src="selected.logo" alt="" class="select__labellogo">
            <span v-if="selected.name" class="select__labelname">{{ selected.name }}</span>
            <span v-else>{{ filtername }}</span>
          </span>
        </div>
        <button class="text-2xl align-top text-red-600" @click="selectReset">
          &times;
        </button>
        <div class="select__dropdown" :class="{'hidden': isHidden}">
          <input
            v-model="suggestion"
            class="select__input"
            type="text"
            placeholder="Начните вводить название..."
          >
          <div v-for="item in showdata" :key="item.id">
            <li class="select__item" :class="[active == item.id ? 'selected ' : 'notselected']" @click="selectFetch(item)">
              <div class="select__content">
                <img v-if="item.logo" :src="item.logo" alt="" class="select__logo">
                <span v-if="item.name" class="select__text">
                  {{ item.name }}
                </span>
              </div>
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    filtername: {
      type: String,
      default: 'Фильтр по банку'
    },
    filterby: {
      type: Array,
      require: true,
      default: null
    }
  },
  data () {
    return {
      data: this.filterby,
      isHidden: true,
      active: null,
      selected: [],
      suggestion: ''
    }
  },
  computed: {
    showdata () {
      return this.suggestion.length ? this.data.filter(item => item.name.toLowerCase().includes(this.suggestion.toLowerCase())) : this.data
    }
  },
  watch: {
    filterby () {
      this.data = this.filterby
    }
  },
  methods: {
    selectReset () {
      this.selected = []
      this.isHidden = true
      this.active = null
      this.$emit('selectReset')
    },
    selectFetch (arg) {
      this.suggestion = ''
      this.active = arg.id
      this.selected = arg
      this.isHidden = true
      this.$emit('selectFetch', this.selected.id)
    }
  }
}
</script>

<style scoped>
@tailwind components;
@layer components {
.select__label {
    @apply relative rounded border px-4 py-2 w-full inline-block max-w-xs
  }
  .select__dropdown {
    @apply absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm
  }
  .select__item {
    @apply list-none cursor-pointer select-none relative py-2 pl-3 pr-9
  }
  .select__logo {
    @apply flex-shrink-0 h-6 w-6 rounded-full
  }
  .select__input {
  @apply block w-full py-2 px-4 text-black border mx-4 p-2 max-w-xs
  }
  .select__content {
    @apply flex items-center
  }
  .select__text {
    @apply pl-2
  }
  .select__items {
    @apply text-gray-400
  }
  .select__items.active {
    @apply text-black
  }
  .select__labelname {
    @apply ml-3 block truncate
  }
  .select__labellogo {
    @apply flex-shrink-0 h-6 w-6 rounded-full
  }
  .select__items {
    @apply flex items-center
  }
  .select {
    @apply mt-1 relative
  }
  .select__item.notselected {
    @apply text-gray-900
  }
  .select__item.selected {
    @apply text-white bg-green-500
  }
  .select__item {
    @apply hover:text-white hover:bg-green-500
  }
}</style>
