<template>
  <div
    v-if="message"
    class="my-2 fixed container top-2 left-0 right-0 m-auto bg-red-100 rounded-lg z-50 border-2 border-red-500"
    :class="{'text-red-600': typeError, 'text-green-500': typeInfo, 'text-yellow-500': typeWarning, }"
  >
    <p class="py-2 px-4 font-bold text-md">
      {{ message.value }}
    </p>
  </div>
</template>

<script>
export default {
  // компонент для оповещения о событиях (ошибки, успешные запросы и т.д.)
  computed: {
    message () {
      return this.$store.getters.message
    },
    typeError () {
      return this.$store.getters.message.type === 'error'
    },
    typeInfo () {
      return this.$store.getters.message.type === '' || this.$store.getters.message.type === 'info'
    },
    typeWarning () {
      return this.$store.getters.message.type === 'warning'
    }
  }
}
</script>
