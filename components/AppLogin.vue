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
              :disabled="invalid"
            >
              Войти
            </button>
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
  methods: {
    async onSubmit () {
      try {
        await this.$auth.loginWith('local', { data: { ...this.userdata } })
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
