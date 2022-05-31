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
            <td>
              <b>ID</b>: {{ item.id }}
            </td>
            <td>
              <b>email</b>: {{ item.email }}
            </td>
            <td>
              <b>Username</b>: {{ item.username }}
            </td>
          </tr>
        </tbody>
      </table>
      <button
        class="button"
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
