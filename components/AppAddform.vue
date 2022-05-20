<template>
  <div class="container p-8 max-w-md">
    <div>
      <button
        class="py-2 px-8 mb-4 rounded inline-block text-white bg-blue-400"
        :class="{'opacity-80': showform}"
        @click="showform = !showform">
        Добавить куратора
      </button>
    </div>
    <transition name="slide">
      <div v-if="showform">
        <ValidationObserver v-slot="{ invalid }">
          <form @submit.prevent="onSubmit">
            <AppInput
              v-model="formData.email"
              inputtype="email"
              inputplaceholder="Email"
              inputname="email"
            />
            <AppInput
              v-model="formData.firstName"
              inputplaceholder="Имя"
              inputname="firstName"
            />
            <AppInput
              v-model="formData.lastName"
              inputplaceholder="Фамилия"
              inputname="lastName"
            />
            <AppInput
              v-model="formData.middleName"
              inputplaceholder="Отчество"
              inputname="middleName"
            />
            <AppInput
              v-model="formData.phone"
              inputplaceholder="Телефон"
              inputname="phone"
            />
            <AppInput
              v-model="formData.partner"
              inputplaceholder="Партнер"
              inputname="partner"
            />
            <AppInput
              v-model="formData.bank"
              inputplaceholder="Банк"
              inputname="bank"
            />
            <div class="form-group mb-2">
              <button
                type="submit"
                class="bg-green-500 rounded text-white px-8 py-2 font-bold"
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
      showform: true,
      formData: {
        email: '',
        firstName: 'test',
        lastName: 'test',
        middleName: 'test',
        phone: 'test',
        partner: '7',
        bank: '10'
      }
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
