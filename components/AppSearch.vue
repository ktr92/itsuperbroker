<template>
  <div>
    <label>
      <input
        v-model="request"
        class="border border-gray-300 p-2 text-sm mb-4 rounded"
        type="text"
        placeholder="Поиск по контактам"
      >
      <button class="text-2xl align-top text-red-600" @click="reset">&times;</button>
    </label>
  </div>
</template>

<script>
// компонент передает родителю введенную строку
export default {
  data () {
    return {
      request: ''
    }
  },
  watch: {
    request () {
      this.$emit('searchlist', this.request.trim().toLowerCase())
    }
  },
  methods: {
    reset () {
      this.request = ''
    }
  }
}
</script>

<style></style>
