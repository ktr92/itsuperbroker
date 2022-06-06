<template>
  <div class="container columns-2 py-4 px-2">
    <ListItems :list="managers" :filterby="filterby" :searchby="searchby">
      <template #title>
        Список кураторов
      </template>
      <template #items="slotProps">
        <ModuleManagerView :items="slotProps.items" :namespace="NAMESPACE" :headers="headers" />
      </template>
    </ListItems>
    <FormAddItem />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { FETCH } from '@/store/action-types'
const NAMESPACE = 'managers'

export default {
  data () {
    return {
      NAMESPACE,
      searchby: ['email', 'phone', 'firstName', 'lastName', 'middleName'],
      headers: ['Имя', 'Фамилия', 'Отчество', 'E-mail', 'Телефон', 'Банк', 'Удалить'].length,
      filterby: 'banks'
    }
  },
  async fetch () {
    await this.$store.dispatch(`${NAMESPACE}/${FETCH}`)
  },
  computed: {
    ...mapGetters(`${NAMESPACE}`,
      ['managers']
    )
  }
}
</script>

<style>

</style>
