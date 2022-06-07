<template>
  <div class="container columns-2 py-4 px-2">
    <ListItems :list="getItems" :filterby="filterby" :searchby="searchby">
      <template #title>
        Список кураторов
      </template>
      <template #items="slotProps">
        <ModuleManagerView :items="slotProps.items" :namespace="NAMESPACE" :headers="headers" />
      </template>
    </ListItems>
    <FormAddItem :input="formdata" :namespace="NAMESPACE" :method="ACTION_CREATE">
      <template #header>
        Создание куратора
      </template>
    </FormAddItem>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ACTION_FETCH, ACTION_CREATE } from '@/store/action-types'
import { GETTER_GETALL } from '@/store/getter-types'
const NAMESPACE = 'managers'

export default {
  data () {
    return {
      NAMESPACE,
      ACTION_CREATE,
      searchby: ['email', 'phone', 'firstName', 'lastName', 'middleName'],
      headers: ['Имя', 'Фамилия', 'Отчество', 'E-mail', 'Телефон', 'Банк', 'Удалить'],
      filterby: 'bank',
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
