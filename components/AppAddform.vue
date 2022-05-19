<template>
  <div>
    <div class="text-green-500 text-center">
      <button @click="!showform">
        Добавить куратора
      </button>
    </div>
    <div v-if="showform">
      <ValidationObserver v-slot="{ invalid }">
        <form @submit.prevent="onSubmit">
          <div class="form-group mb-2">
            <ValidationProvider rules="required" :immediate="true" v-slot="{ errors }">
              <input
                v-model="formData.email"
                :class="{'border-red-600': errors[0]}"
                type="text"
                placeholder="Email"
                class="rounded border border-rose-600 px-4 py-2 w-full"
                name="email"
                autocomplete="off"
              >
              <small v-if="errors" class="text-red-600">{{ errors[0] }}</small>
            </ValidationProvider>
          </div>
          <div class="form-group mb-2">
            <ValidationProvider rules="required" :immediate="true" v-slot="{ errors }">
              <input
                v-model="formData.firstName"
                :class="{'border-red-600': errors[0]}"
                type="text"
                placeholder="Имя"
                class="rounded border border-rose-600 px-4 py-2 w-full"
                name="firstName"
                autocomplete="off"
              >
              <small v-if="errors[0]" class="text-red-600">{{ errors[0] }}</small>
            </ValidationProvider>
          </div>
          <div class="form-group mb-2">
            <ValidationProvider rules="required" :immediate="true" v-slot="{ errors }">
              <input
                v-model="formData.lastName"
                :class="{'border-red-600': errors[0]}"
                type="text"
                placeholder="Фамилия"
                class="rounded border border-rose-600 px-4 py-2 w-full"
                name="lastName"
                autocomplete="off"
              >
              <small v-if="errors[0]" class="text-red-600">{{ errors[0] }}</small>
            </ValidationProvider>
          </div>
          <div class="form-group mb-2">
            <ValidationProvider rules="required" :immediate="true" v-slot="{ errors }">
              <input
                v-model="formData.middleName"
                :class="{'border-red-600': errors[0]}"
                type="text"
                placeholder="Отчество"
                class="rounded border border-rose-600 px-4 py-2 w-full"
                name="middleName"
                autocomplete="off"
              >
              <small v-if="errors[0]" class="text-red-600">{{ errors[0] }}</small>
            </ValidationProvider>
          </div>
          <div class="form-group mb-2">
            <ValidationProvider rules="required" :immediate="true" v-slot="{ errors }">
              <input
                v-model="formData.phone"
                :class="{'border-red-600': errors[0]}"
                type="tel"
                placeholder="Телефон"
                class="rounded border border-rose-600 px-4 py-2 w-full"
                name="phone"
                autocomplete="off"
              >
              <small v-if="errors[0]" class="text-red-600">{{ errors[0] }}</small>
            </ValidationProvider>
          </div>
          <div class="form-group mb-2">
            <ValidationProvider rules="required" :immediate="true" v-slot="{ errors }">
              <input
                v-model="formData.partner"
                :class="{'border-red-600': errors[0]}"
                type="text"
                placeholder="Партнер"
                class="rounded border border-rose-600 px-4 py-2 w-full"
                name="partner"
                autocomplete="off"
              >
              <small v-if="errors[0]" class="text-red-600">{{ errors[0] }}</small>
            </ValidationProvider>
          </div>
          <div class="form-group mb-2">
            <ValidationProvider rules="required" :immediate="true" v-slot="{ errors }">
              <input
                v-model="formData.bank"
                :class="{'border-red-600': errors[0]}"
                type="text"
                placeholder="Банк"
                class="rounded border border-rose-600 px-4 py-2 w-full"
                name="bank"
                autocomplete="off"
              >
              <small v-if="errors[0]" class="text-red-600">{{ errors[0] }}</small>
            </ValidationProvider>
          </div>
          <div class="form-group mb-2">
            <button
              type="submit"
              class="cursor-pointer rounded text-white font-bold px-4 py-2 w-full uppercase bg-green-500 hover:bg-green-600 transition duration-150 ease-in-out"
              :disabled="invalid"
            >
              Создать
            </button>
            <div v-if="errormessage" class="text-red-600">
              {{ errormessage }}
            </div>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      showform: true,
      formData: {
        email: '',
        firstName: '',
        lastName: '',
        middleName: '',
        phone: '',
        partner: '',
        bank: ''
      }
    }
  },
  computed: {
    errormessage () {
      return this.errors
    }
  },
  methods: {
    async onSubmit () {
      try {
        await this.$store.dispatch('managers/add', this.formData)
      } catch (err) {
        this.errors = err.response.data.message
      }
    }
  }
}
</script>

<style></style>
