<template>
  <div>
    <div class="mb-8 text-center text-2xl">
      <h1>Авторизация</h1>
    </div>
    <div v-if="$auth.loggedIn" class="text-green-500 text-center">
      Вы авторизованы!
    </div>
    <div v-else>
      <ValidationObserver v-slot="{ invalid }">
        <form @submit.prevent="onSubmit">
          <AppInput
            v-model="userdata.username"
            inputplaceholder="Логин"
            inputname="login"
          />
          <AppInput
            v-model="userdata.password"
            inputtype="password"
            inputplaceholder="Пароль"
            inputname="pass"
          />
          <div class="form-group mb-2">
            <button
              type="submit"
              class="cursor-pointer rounded text-white font-bold px-4 py-2 w-full uppercase bg-green-500 hover:bg-green-600 transition duration-150 ease-in-out"
              :disabled="invalid"
            >
              Войти
            </button>
            <div v-if="errormessage" class="text-red-600">{{ errormessage }}</div>
          </div>
        </form>
      </ValidationObserver>
    </div>
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
      errors: null,
      userdata: {
        username: 'ivanov@ipotech.su',
        password: 'c2d3e1de1'
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
        await this.$auth.loginWith('local', { data: { ...this.userdata, client_id: process.env.client_id, client_secret: process.env.client_secret } })
      } catch (e) {
        this.$store.dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
      }
    }
  }
}
</script>

<style>
 [disabled] {
    cursor: not-allowed;
    background: #ccc;
  }
  [disabled]:hover {
    cursor: not-allowed;
    background: #ccc;
  }
  * {
    outline: none !important;
  }
</style>
