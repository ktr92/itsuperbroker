<template>
  <div class="form-group mb-2">
    <ValidationProvider rules="required" :immediate="true" v-slot="{ errors }">
      <input
        :class="{'border-red-600': errors[0]}"
        :type="inputtype"
        :placeholder="inputplaceholder"
        :name="inputname"
        class="rounded border border-rose-600 px-4 py-2 w-full"
        autocomplete="off"
        @input="handleInput"
      >
      <small v-if="errors" class="text-red-600">{{ errors[0] }}</small>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
  components: {
    ValidationProvider
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    inputtype: {
      type: String,
      default: 'text'
    },
    inputplaceholder: {
      type: String,
      default: ''
    },
    inputname: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      content: this.value
    }
  },
  computed: {
    errormessage () {
      return this.errors
    }
  },
  methods: {
    handleInput () {
      this.$emit('input', this.content)
    }
  }
}
</script>

<style>

</style>
