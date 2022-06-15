<template>
  <div class="w-full">
    <template v-if="dataArr.length">
      <ValidationObserver v-slot="{ invalid }">
        <form @submit.prevent="onSubmit">
          <UiInput
            v-for="(data, index) in dataArr"
            :key="data.id"
            v-model="dataArr[index].model"
            :inputtype="data.type"
            :inputplaceholder="data.placeholder"
            :inputname="data.name"
          />
          <div class="form-group mb-2">
            <button
              type="submit"
              :disabled="invalid"
            >
              Сохранить
            </button>
          </div>
        </form>
      </ValidationObserver>
    </template>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import { helperSetmodel } from '@/utils/helpers'

export default {
  components: {
    ValidationObserver
  },
  props: {
    input: {
      type: Array,
      default: null
    }
  },
  data () {
    return {
      dataArr: this.input
    }
  },
  computed: {
    formData () {
      // из массива инпутов получаем объект с нужными полями для модели
      return helperSetmodel(this.dataArr, 'id', 'model')
    }
  },
  methods: {
    /* async onSubmit () {
      try {
        await this.$store.dispatch(`${this.namespace}/${this.method}`, this.formData)
      } catch (e) {
        this.$store.dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
      }
    } */
  }
}
</script>

<style></style>
