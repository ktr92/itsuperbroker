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
      <AppFilter :data="banks" @filterlist="filterlist" />
      <table v-if="itemsSelected" class="my-4">
        <tbody>
          <tr
            v-for="item in itemsSelected"
            :key="item.id"
            class="p-4"
          >
            <td class="p-2 border-b-2">
              <b>ID</b>: {{ item.id }}
            </td>
            <td class="p-2 border-b-2">
              <b>Имя</b>: {{ item.firstName }}
            </td>
            <td class="p-2 border-b-2">
              <b>Банк</b>: {{ item.bank.name }}
            </td>
            <td class="p-2 border-b-2">
              <b>Email</b>: {{ item.email }}
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
        @click="getItems"
      >
        Обновить список кураторов
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
      ['items']
    ),
    itemsSelected () {
      return intersectionBy(this.items, this.itemsSearch, this.itemsFiltered, 'id') || this.items
    },
    itemsFiltered () {
      return this.items.filter(item => this.filterdata.includes(item.bank.id)) || this.items
    },
    itemsSearch () {
      return this.items.filter(item => item.firstName.toLowerCase().includes(this.searchdata)) || this.items
    },
    banks () {
      return this.items.map(item => item.bank)
    }
  },
  mounted () {
    this.filterdata = this.items.map(item => item.bank.id)
  },
  methods: {
    getItems () {
      this.$fetch()
    },
    async remove (id) {
      if (confirm(`Удалить ${this.$store.getters['managers/itembyid'](id).email}?`)) {
        await this.$store.dispatch('managers/remove', id)
      }
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
