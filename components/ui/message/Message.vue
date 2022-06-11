<template>
  <div
    v-if="datamessage.value"
    class="appmessage"
    :class="{'appmessage_error': typeError, 'appmessage_default': typeInfo, 'appmessage_warn': typeWarning }"
  >
    <p class="py-2 px-4 font-bold text-md">
      {{ datamessage.value }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    entrymessage: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      datamessage: { ...this.entrymessage }
    }
  },
  computed: {
    message () {
      return this.$store.getters.message
    },
    typeError () {
      return this.datamessage.type === 'error'
    },
    typeInfo () {
      return this.datamessage.type === '' || this.datamessage.type === 'info'
    },
    typeWarning () {
      return this.datamessage.type === 'warning'
    }
  },
  watch: {
    message (value) {
      this.datamessage = { ...value }
    }
  }
}
</script>
