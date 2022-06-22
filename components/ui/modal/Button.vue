<template>
  <button class="button button_inline" @click="toggleModal">
    <slot />
  </button>
</template>

<script>
export default {
  methods: {
    toggleModal () {
      this.$store.dispatch('toggleModal')
    }
  }
}

</script>

<style>

</style>
