<template>
  <div class="form-group mb-2">
    <ValidationProvider v-slot="{ errors }" :rules="validators" :immediate="true">
      <input
        v-model="initialValue"
        :class="{'border-red-600': errors[0]}"
        :type="inputtype"
        :placeholder="inputplaceholder"
        :name="inputname"
        class="input"
        autocomplete="off"
        @change="handleInput"
        @input="handleInput"
      >
      <small v-if="errors" class="text-red-600">{{ errors[0] }}</small>
    </ValidationProvider>
  </div>
</template>

<script>
// компонент для инпутов с валидацией
import { ValidationProvider } from 'vee-validate'
export default {
  $_veeValidate: {
    value () {
      return this.$el.value
    }
  },
  components: {
    ValidationProvider
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    inputplaceholder: {
      type: String,
      default: ''
    },
    inputname: {
      type: String,
      default: ''
    },
    inputtype: {
      type: String,
      default: 'text'
    },
    validators: {
      type: String,
      default: 'required'
    }
  },
  data () {
    return {
      initialValue: this.value
    }
  },
  computed: {
    errormessage () {
      return this.errors
    }
  },
  methods: {
    handleInput (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped>
  .input {
    @apply rounded border px-4 py-2 w-full inline-block max-w-xs
  }
</style>
