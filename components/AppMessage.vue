<template>
  <div
    v-if="message"
    class="appmessage"
    :class="{'appmessage_error': typeError, 'appmessage_default': typeInfo, 'appmessage_warn': typeWarning }"
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
