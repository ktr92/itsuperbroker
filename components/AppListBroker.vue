<template>
  <div class="w-full p-4">
    <h1 class="my-4">
      Список брокеров
    </h1>
    <p v-if="$fetchState.pending">
      Загрузка данных...
    </p>
    <div v-else>
      <table v-if="items" class="my-4">
        <tbody>
          <tr
            v-for="item in items"
            :key="item.id"
            class="p-4"
          >
            <td class="p-2 border-b-2">
              <b>ID</b>: {{ item.id }}
            </td>
            <td class="p-2 border-b-2">
              <b>email</b>: {{ item.email }}
            </td>
            <td class="p-2 border-b-2">
              <b>Username</b>: {{ item.username }}
            </td>
          </tr>
        </tbody>
      </table>
      <button
        class="bg-green-500 rounded text-white px-8 py-2"
        @click="getItems"
      >
        Обновить список брокеров
      </button>
    </div>
  </div>
</template>

<script>
export default {
  async fetch () {
    await this.$store.dispatch('brokers/fetch')
  },
  computed: {
    items () {
      return this.$store.getters['brokers/brokers']
    }
  },
  methods: {
    getItems () {
      this.$fetch()
    }
  }
}
</script>

<style>

</style>
