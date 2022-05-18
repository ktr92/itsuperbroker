<template>
  <div class="container p-8">
    <h1>Managers List</h1>
    <table v-if="items" class="m-4">
      <tr
        v-for="item in items.data.data"
        :key="item.id"
        class="p-4"
      >
        <td class="p-2 border-b-2"><b>ID</b>: {{ item.id }}</td>
        <td class="p-2 border-b-2"><b>Имя</b>: {{ item.firstName }}</td>
        <td class="p-2 border-b-2"><b>Банк</b>: {{ item.bank.name }}</td>
        <td class="p-2 border-b-2"><b>Email</b>: {{ item.email }}</td>
      </tr>
    </table>
    <button
      @click="getManagers"
      class="bg-green-500 rounded text-white px-8 py-2"
    >GET</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: null
    }
  },
  async fetch ({ store }) {
    this.items = await store.dispatch('managers/fetch')
  },
  methods: {
    async getManagers () {
      this.items = await this.$store.dispatch('managers/fetch')
      console.log(this.items)
    }
  }
}
</script>

<style>

</style>
