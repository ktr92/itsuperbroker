<template>
  <div>
    <div class="container columns-2 py-4 px-2">
      <ListItems :list="managers" :headerlist="managerHeaders" filterby="bank" :searchby="['email', 'phone', 'firstName', 'lastName', 'middleName']">
        <template #title>
          Список кураторов
        </template>
        <template #items="slotProps">
          <ModuleManager :items="slotProps.items" :headerlist="slotProps.headers" />
        </template>
      </ListItems>
      <FormAddItem />
    </div>
    <!-- <div class="container columns-2 py-4 px-2">
      <AppList :list="brokers" :headers="brokerHeaders">
        <template #title>
          Список брокеров
        </template>
        <template #header="slotProps">
          <AppTableHeader :headers="slotProps" />
        </template>
        <template #item="slotProps">
          <AppBroker :item="slotProps.item" />
        </template>
      </AppList>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'MainLayout',
  middleware: 'auth',
  async asyncData ({ store }) {
    await store.dispatch('managers/fetch')
  },
  computed: {
    ...mapGetters('managers',
      ['managers', 'managerHeaders']
    )
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  width: 100%;
  margin: auto;
}
.columns-2 {
  display: flex;
}
.columns-2 > div:first-child {
  width: 70%;
}
.columns-2 > div:last-child {
  width: 30%;
}
@media (max-width: 1023px) {
  .columns-2 {
    flex-wrap: wrap;
  }
  .columns-2 > div {
    width: 100%;
  }
}
</style>
