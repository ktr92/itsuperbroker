<template>
  <div class="columns-2 py-4 px-2">
    <div v-if="$fetchState.pending">
      Загрузка данных...
    </div>
    <ListItems v-else :list="getItems" :filterby="getBanks" :searchby="searchby" :namespace="NAMESPACE">
      <template #title>
        Список кураторов
      </template>
      <template #items="slotProps">
        <ModuleManagerView :items="slotProps.items" :namespace="NAMESPACE" :headers="headers" />
      </template>
      <template #nav>
        <ListPager :key="getTotal" :total-items-prop="getTotal" :current-page-prop="getPage" :per-page-prop="getPerPage" @pageChanged="pageChanged" />
      </template>
    </ListItems>
    <div>
      <template v-if="formdata.length">
        <LazyUiModal>
          <template #button>
            Создать куратора
          </template>
          <template #header>
            Создание куратора
          </template>
          <template #body>
            <FormAddItem :input="formdata" :namespace="NAMESPACE" />
          </template>
        </LazyUiModal>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ACTION_FETCH, ACTION_FETCHBANKS } from '@/store/action-types'
import { GETTER_GETALL, GETTER_GETPAGE, GETTER_GETTOTAL, GETTER_GETPERPAGE, GETTER_GETBANKS, GETTER_GETBANKID } from '@/store/getter-types'
import { MUTATION_PAGENUMBER } from '@/store/mutation-types'
const NAMESPACE = 'managers'

export default {
  layout: 'MainLayout',
  middleware: 'auth',
  data () {
    return {
      NAMESPACE,
      searchby: ['email', 'phone', 'firstName', 'lastName', 'middleName'],
      headers: ['Имя', 'Фамилия', 'Отчество', 'E-mail', 'Телефон', 'Банк', 'Удалить'],
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
    await this.$store.dispatch(`${NAMESPACE}/${ACTION_FETCH}`, { currentPage: this.getPage, itemsPerPage: this.getPerPage, bankId: this.getBankId })
    await this.$store.dispatch(`${NAMESPACE}/${ACTION_FETCHBANKS}`)
  },
  computed: {
    ...mapGetters(`${NAMESPACE}`,
      [GETTER_GETALL, GETTER_GETPERPAGE, GETTER_GETPAGE, GETTER_GETTOTAL, GETTER_GETBANKS, GETTER_GETBANKID]
    )
  },
  methods: {
    async pageChanged (page) {
      await this.$store.dispatch(`${NAMESPACE}/${ACTION_FETCH}`, { currentPage: page, itemsPerPage: this.getPerPage, bankId: this.getBankId })
      this.$store.commit(MUTATION_PAGENUMBER, page)
    }
  }
}
</script>

<style>

</style>
