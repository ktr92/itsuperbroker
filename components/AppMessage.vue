<template>
  <div
    v-if="message"
    class="my-2 fixed container bottom-2 left-0 right-0 m-auto bg-red-100 rounded-lg z-50 border-2 border-red-500 text-red-600"
    :class="{'text-red-600 border-red-500 bg-red-100': typeError, 'text-green-600 border-green-500 bg-green-100': typeInfo, 'text-yellow-600 border-yellow-500 bg-yellow-100': typeWarning }"
  >
    <p class="py-2 px-4 font-bold text-md">
      {{ message.value }}
    </p>
  </div>
</template>

<script>
// компонент для оповещения о событиях (ошибки, успешные запросы и т.д.)
export default {
  computed: {
    message () {
      return this.$store.getters.message
    },
    typeError () {
      return this.message.type === 'error'
    },
    typeInfo () {
      return this.message.type === '' || this.message.type === 'info'
    },
    typeWarning () {
      return this.message.type === 'warning'
    }
  }
}
</script>
