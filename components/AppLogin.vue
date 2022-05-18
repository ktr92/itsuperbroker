<template>
  <div>
    <div class="mb-8 text-center text-2xl">
      <h1>Авторизация</h1>
    </div>
    <div v-if="$auth.loggedIn" class="text-green-500">
      Авторизован!
    </div>
    <div v-else>
      <ValidationObserver v-slot="{ invalid }">
        <form @submit.prevent="onSubmit">
          <div class="form-group mb-2">
            <ValidationProvider rules="required" :immediate="true" v-slot="{ errors }">
              <input
                v-model="userdata.username"
                :class="{'border-red-600': errors[0]}"
                type="text"
                placeholder="Логин"
                class="rounded border border-rose-600 px-4 py-2 w-full"
                name="login"
                autocomplete="off"
              >
              <small v-if="errors" class="text-red-600">{{ errors[0] }}</small>
            </ValidationProvider>
          </div>
          <div class="form-group mb-2">
            <ValidationProvider rules="required" :immediate="true" v-slot="{ errors }">
              <input
                v-model="userdata.password"
                :class="{'border-red-600': errors[0]}"
                type="password"
                placeholder="Пароль"
                class="rounded border border-rose-600 px-4 py-2 w-full"
                name="login"
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
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data () {
    return {
      errors: null,
      userdata: {
        username: 'ivanov@ipotech.su',
        password: 'c2d3e1de1',
        client_id: 'c3ff36379fd0aff317297ed1d1b45b80',
        client_secret: '7d094bf4175b0a95890b30a8c260597449b086aac70729444d72a4b2d11f3ee0ba05356ee4e63bd28f26f8f63ae40c685f6e0ae9512b38902c63e652b1c6621c',
        grant_type: 'password',
        scope: ['broker']
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
      /*  const response = await this.$axios.post('https://api-broker.demo.ipotech.su/oauth2/token', this.userdata)
      console.log(response) */
      /* try {
        await this.$auth.loginWith('oauth2', { data: this.userdata })
      } catch (err) {
        this.errors = err.message
        console.log(err)
      } */
      try {
        await this.$auth.loginWith('local', { data: this.userdata })
      } catch (err) {
        this.errors = err.message
        console.log(err)
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
</style>
