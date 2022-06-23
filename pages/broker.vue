<template>
  <div class="columns-2 py-4 px-2">
    <div v-if="$fetchState.pending">
      Загрузка данных...
    </div>
    <LazyListItems v-else :list="getItems" :searchby="searchby">
      <template #title>
        Список брокеров
      </template>
      <template #items="slotProps">
        <LazyModuleBrokerView :items="slotProps.items" :namespace="NAMESPACE" :headers="headers" />
      </template>
    </LazyListItems>
    <div>
      <template v-if="formdata.length">
        <LazyUiModal>
          <template #button>
            Создать брокера
          </template>
          <template #header>
            Создание брокера
          </template>
          <template #body>
            <LazyFormAddItem :input="formdata" :namespace="NAMESPACE" />
          </template>
        </LazyUiModal>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ACTION_FETCH } from '@/store/action-types'
import { GETTER_GETALL } from '@/store/getter-types'
const NAMESPACE = 'brokers'

export default {
  layout: 'MainLayout',
  middleware: 'auth',
  data () {
    return {
      NAMESPACE,
      searchby: ['email', 'phone', 'firstName', 'lastName', 'middleName'],
      headers: ['Имя', 'Фамилия', 'Отчество', 'E-mail', 'Телефон', 'Удалить'],
      formdata: [
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
        }
      ]
    }
  },
  async fetch () {
    await this.$store.dispatch(`${NAMESPACE}/${ACTION_FETCH}`)
  },
  computed: {
    ...mapGetters(`${NAMESPACE}`,
      [GETTER_GETALL]
    )
  }
}
</script>

<style>

</style>
