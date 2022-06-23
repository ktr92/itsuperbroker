<template>
  <div class="w-full">
    <div class="mb-4">
      <h2><slot name="header" /></h2>
    </div>
    <div v-if="dataArr.length">
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
              Отправить
            </button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import { helperSetmodel } from '@/utils/helpers'
import { ACTION_CREATE } from '@/store/action-types'

export default {
  components: {
    ValidationObserver
  },
  props: {
    input: {
      type: Array,
      default: null
    },
    namespace: {
      type: String,
      required: true
    },
    method: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      // данные для формы: id = ключ для объекта модели; model = значение
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
    async onSubmit () {
      try {
        await this.$store.dispatch(`${this.namespace}/${ACTION_CREATE}`, this.formData)
      } catch (e) {
        this.$store.dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
      }
    }
  }
}
</script>

<style></style>
