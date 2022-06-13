<template>
  <div v-if="data">
    <div>
      <div class="select">
        <div class="select__label" @click="isHidden = !isHidden">
          <span v-if="selected" class="select__items">
            <img :src="selected.logo" alt="" class="select__labellogo">
            <span class="select__labelname">{{ selected.name }}</span>
          </span>
        </div>
        <div class="select__dropdown" :class="{'hidden': isHidden}">
          <input
            v-model="suggestion"
            class="select__input"
            type="text"
            placeholder="Начните вводить название..."
          >
          <div v-for="item in showdata" :key="item.id">
            <li class="select__item" :class="[active == item.id ? 'selected ' : 'notselected']" @click="selectIt(item)">
              <div class="select__content">
                <img v-if="item.logo" :src="item.logo" alt="" class="select__logo">
                <span v-if="item.name" class="pl-2">
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
    /*  selected () {
      this.$emit('filterlist', this.selected)
    }, */
    filterby () {
      this.data = this.filterby
    }
  },
  methods: {
    reset () {
      this.selected = []
    },
    selectIt (arg) {
      this.suggestion = ''
      this.active = arg.id
      this.selected = arg
      this.isHidden = true
      /*  this.$emit('filterlist', this.selected) */
    }
  }
}
</script>

<style scoped>
@tailwind components;
@layer components {
.select__label {
    @apply relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm
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
    @apply block w-full py-2 px-4
  }
  .select__content {
    @apply flex items-center
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
