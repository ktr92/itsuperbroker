<template>
  <div class="w-full p-4">
    <h1 class="my-4">
      Список кураторов
    </h1>
    <div v-if="items">
      <AppFilterGroup :filtered="items" @filter="filter" />
      <table v-if="itemsfilter" class="my-4">
        <tbody>
          <tr
            v-for="item in itemsfilter"
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
    </div>
  </div>
</template>

<script>
// компонент для вывода данных
export default {
  props: {
    list: {
      type: Array,
      default: null,
      required: true
    }
  },
  data () {
    return {
      items: this.list,
      itemsfilter: this.list,
      filterdata: [],
      searchdata: []
    }
  },
  watch: {
    list () {
      this.itemsfilter = this.list
      this.items = this.list
    }
  },
  methods: {
    async remove (id) {
      if (confirm(`Удалить ${this.$store.getters['managers/itemById'](id).email}?`)) {
        await this.$store.dispatch('managers/remove', id)
      }
    },
    filter (data) {
      this.itemsfilter = data
    }
  }
}
</script>

<style>

</style>
