<template>
  <div>
    <label>
      <input
        v-model="request"
        class="input"
        type="text"
        placeholder="Поиск по контактам"
      >
      <button class="text-2xl align-top text-red-600" @click="reset">&times;</button>
    </label>
  </div>
</template>

<script>
// компонент-поиск передает родителю введенную строку
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
