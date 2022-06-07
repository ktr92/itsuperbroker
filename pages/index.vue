<template>
  <div>
    <ModuleManagerMain />
    <ModuleBrokerMain />

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
export default {
  layout: 'MainLayout',
  middleware: 'auth'
}
</script>

<style>

</style>
