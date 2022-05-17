<template>
  <div>
    <div class="mb-8 text-center text-2xl">
      <h1>Авторизация</h1>
    </div>
    <div v-if="$auth.loggedIn">
      {{ $auth.user.login }}
      <v-btn text>
        Выйти
      </v-btn>
    </div>
    <div v-else>
      <form @submit.prevent="onSubmit">
        <div class="form-group mb-2">
          <ValidationProvider rules="required" v-slot="{ errors }">
            <input
              v-model="login"
              :class="{'border-red-600': errors[0]}"
              type="text"
              placeholder="Логин"
              class="rounded border-2 border-rose-600 px-4 py-2 w-full"
              name="login"
              autocomplete="off"
            >
            <small v-if="errors" class="text-red-600">{{ errors[0] }}</small>
          </ValidationProvider>
        </div>
        <div class="form-group mb-2">
          <ValidationProvider rules="required" v-slot="{ errors }">
            <input
              v-model="password"
              :class="{'border-red-600': errors[0]}"
              type="password"
              placeholder="Пароль"
              class="rounded border-2 border-rose-600 px-4 py-2 w-full"
              name="login"
              autocomplete="off"
            >
            <small v-if="errors[0]" class="text-red-600">{{ errors[0] }}</small>
          </ValidationProvider>
        </div>
        <div class="form-group mb-2">
          <button
            type="submit"
            class="cursor-pointer rounded text-white font-bold px-4 py-2 w-full uppercase bg-gray-500 hover:bg-gray-400 transition duration-150 ease-in-out"
            :disabled="0"
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider
  },
  data () {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      alert(JSON.stringify({ login: this.login, password: this.password }, null, 2))
    }
  }
}
</script>

<style>

</style>
