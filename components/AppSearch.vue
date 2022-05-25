<template>
  <div>
    <label>
      <input
        v-model="request"
        class="border border-gray-300 p-2 text-sm mb-4 rounded"
        type="text"
        @input="change"
      >
    </label>
  </div>
</template>

<script>
export default {
  data () {
    return {
      request: null
    }
  },
  methods: {
    change () {
      this.$emit('searchlist', this.request.trim().toLowerCase())
    }
  }
}
</script>

<style></style>
