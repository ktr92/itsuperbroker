<template>
  <div class="w-full p-4">
    <h1 class="my-4">
      Список кураторов
    </h1>
    <p v-if="$fetchState.pending">
      Загрузка данных...
    </p>
    <div v-else>
      <AppSearch @searchlist="searchlist" />
      <AppFilter :key="banks.length" :data="banks" @filterlist="filterlist" />
      <table v-if="itemsSelected" class="my-4">
        <tbody>
          <tr
            v-for="item in itemsSelected"
            :key="item.id"
            class="p-4 text-sm"
          >
            <td class="p-2 border-b-2">
              <b>ID</b><br> {{ item.id }}
            </td>
            <td class="p-2 border-b-2">
              <b>Имя</b><br> {{ item.firstName }}
            </td>
            <td class="p-2 border-b-2">
              <b>Фамилия</b><br> {{ item.lastName }}
            </td>
            <td class="p-2 border-b-2">
              <b>Отчество</b><br> {{ item.middleName }}
            </td>
            <td class="p-2 border-b-2">
              <b>Банк</b><br> {{ item.bank.name }}
            </td>
            <td class="p-2 border-b-2">
              <b>Email</b><br> {{ item.email }}
            </td>
            <td class="p-2 border-b-2">
              <b>Телефон</b><br> {{ item.phone }}
            </td>
            <td class="p-2 border-b-2">
              <button
                class="bg-red-400 rounded text-white px-4"
                @click="remove(item.id)"
              >
                Удалить
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        class="bg-green-500 rounded text-white px-8 py-2"
        @click="refresh"
      >
        Обновить
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { intersectionBy } from 'lodash'

export default {
  data () {
    return {
      filterdata: [],
      searchdata: []
    }
  },
  async fetch () {
    await this.$store.dispatch('managers/fetch')
  },
  computed: {
    ...mapGetters('managers',
      ['items', 'banks']
    ),
    itemsSelected () {
      return intersectionBy(this.items, this.itemsSearch, this.itemsFiltered, 'id') || this.items
    },
    itemsFiltered () {
      return this.items.filter(item => this.filterdata.includes(item.bank.id)) || this.items
    },
    itemsSearch () {
      return this.items.filter(item => this.findby(item, ['email', 'phone', 'firstName', 'lastName', 'middleName'])) || this.items
    }
  },
  mounted () {
    this.filterdata = this.items.map(item => item.bank.id)
  },
  methods: {
    refresh () {
      this.$fetch()
      this.filterdata = this.items.map(item => item.bank.id)
      this.searchdata = []
    },
    async remove (id) {
      if (confirm(`Удалить ${this.$store.getters['managers/itembyid'](id).email}?`)) {
        await this.$store.dispatch('managers/remove', id)
      }
    },
    findby (obj, fields) {
      return fields.some(item => obj[item].toLowerCase().includes(this.searchdata))
    },
    filterlist (data) {
      this.filterdata = data
    },
    searchlist (data) {
      this.searchdata = data
    }
  }
}
</script>

<style>

</style>
