<template>
  <div class="container columns-2 py-4 px-2">
    <ListItems :list="brokers" :filterby="filterby" :searchby="searchby">
      <template #title>
        Список брокеров
      </template>
      <template #items="slotProps">
        <ModuleManagerView :items="slotProps.items" :namespace="NAMESPACE" :headers="headers" />
      </template>
    </ListItems>
    <FormAddItem :input="formdata" :namespace="NAMESPACE" :method="CREATE_IND">
      <template #header>
        Создание брокера
      </template>
    </FormAddItem>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH, CREATE_IND } from '@/store/action-types'
const NAMESPACE = 'brokers'

export default {
  data () {
    return {
      NAMESPACE,
      CREATE_IND,
      searchby: ['name', 'companyName', 'address', 'kpp', 'ogrn', 'inn'],
      headers: ['Название', 'Наименование', 'ИНН', 'Лого', 'E-mail', 'Телефон', 'Банк', 'Удалить'],
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
  async fetch () {
    await this.$store.dispatch(`${NAMESPACE}/${FETCH}`)
  },
  computed: {
    ...mapGetters(`${NAMESPACE}`,
      ['brokers']
    )
  }
}
</script>

<style>

</style>
