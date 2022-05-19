<template>
  <div class="container p-8">
    <h1 class="m-4">
      Список кураторов
    </h1>
    <table v-if="items" class="m-4">
      <tr
        v-for="item in items.data"
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
      </tr>
    </table>
    <button
      class="bg-green-500 rounded text-white px-8 py-2"
      @click="getManagers"
    >
      Обновить список кураторов
    </button>
  </div>
</template>

<script>
export default {
  async fetch () {
    await this.$store.dispatch('managers/fetch')
  },
  computed: {
    items () {
      return this.$store.getters['managers/managers']
    }
  },
  methods: {
    getManagers () {
      this.$fetch()
    }
  }
}
</script>

<style>

</style>
