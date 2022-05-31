<template>
  <div class="container p-4 w-full rounded border-2">
    <div class="mb-4">
      <h2>Добавление куратора</h2>
    </div>
    <transition name="slide">
      <div>
        <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent="onSubmit">
            <AppInput
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
                Создать
              </button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </transition>
  </div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationObserver
  },
  data () {
    return {
      // данные для формы: id = ключ для объекта модели; model = значение
      dataArr: [
        {
          model: '@email.com',
          type: 'email',
          placeholder: 'Email',
          id: 'email'
        },
        {
          model: 'test',
          type: 'text',
          placeholder: 'Имя',
          id: 'firstName'
        },
        {
          model: 'test',
          type: 'text',
          placeholder: 'Фамилия',
          id: 'lastName'
        },
        {
          model: 'test',
          type: 'text',
          placeholder: 'Отчество',
          id: 'middleName'
        },
        {
          model: 'test',
          type: 'text',
          placeholder: 'Телефон',
          id: 'phone'
        },
        {
          model: '7',
          type: 'text',
          placeholder: 'ID партнера',
          id: 'partner'
        },
        {
          model: '10',
          type: 'text',
          placeholder: 'ID банка',
          id: 'bank'
        }
      ]
    }
  },
  computed: {
    formData () {
      // из массива инпутов получаем объект с нужными полями для модели
      return this.dataArr.reduce((obj, item) => ({ ...obj, [item.id]: item.model }), {})
    }
  },
  methods: {
    async onSubmit () {
      try {
        await this.$store.dispatch('managers/add', this.formData)
      } catch (e) {
        this.$store.dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
      }
    }
  }
}
</script>

<style></style>
