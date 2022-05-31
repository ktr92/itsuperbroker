<template>
  <div>
    <div v-if="items.length" class="w-full p-4">
      <h1 class="my-4">
        Список кураторов
      </h1>
      <div>
        <LazyAppFilterGroup v-if="items.length" :filtered="items" @filter="filter" />
        <table
          v-if="itemsfilter.length"
          class="my-4"
        >
          <thead>
            <tr>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Отчество</th>
              <th>Email</th>
              <th>Телефон</th>
              <th>Банк</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in itemsfilter"
              :key="item.id"
              class="p-4 text-sm"
            >
              <td v-if="item.firstName">
                {{ item.firstName }}
              </td>
              <td v-if="item.lastName">
                {{ item.lastName }}
              </td>
              <td v-if="item.middleName">
                {{ item.middleName }}
              </td>
              <td v-if="item.name">
                {{ item.bank.name }}
              </td>
              <td v-if="item.email">
                {{ item.email }}
              </td>
              <td v-if="item.phone">
                {{ item.phone }}
              </td>
              <td v-if="item.bank.name">
                {{ item.bank.name }}
              </td>
              <td v-if="item.id">
                <button
                  class="redbutton"
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
