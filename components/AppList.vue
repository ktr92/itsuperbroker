<template>
  <div class="w-full p-4">
    <h1 class="my-4">
      Список кураторов
    </h1>
    <p v-if="$fetchState.pending">
      Загрузка данных...
    </p>
    <div v-else>
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
export default {
  data () {
    return {
      filterdata: null
    }
  },
  async fetch () {
    await this.$store.dispatch('managers/fetch')
  },
  computed: {
    items () {
      return this.$store.getters['managers/managers']
    },
    itemsSelected () {
      return this.$store.getters['managers/managerbybank'](this.filterdata || this.banks.map(i => i.id))
    },
    banks () {
      return this.items.map(item => item.bank)
    }
  },
  methods: {
    getItems () {
      this.$fetch()
    },
    async remove (id) {
      if (confirm(`Удалить ${this.$store.getters['managers/managerid'](id).email}?`)) {
        await this.$store.dispatch('managers/remove', id)
      }
    },
    filterlist (data) {
      this.filterdata = data
    }
  }
}
</script>

<style>

</style>
