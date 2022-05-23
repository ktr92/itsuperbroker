<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <label>{{ item.name }}</label>
      <input
        v-model="selected"
        type="checkbox"
        @change="change"
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Object,
      default: null
    }
  },
  methods: {
    change () {
    }
  }
}
</script>

<style>

</style>
