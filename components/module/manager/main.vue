<template>
  <div class="container columns-2 py-4 px-2">
    <ListItems :list="managers" filterby="bank" :searchby="['email', 'phone', 'firstName', 'lastName', 'middleName']">
      <template #title>
        Список кураторов
      </template>
      <template #items="slotProps">
        <ModuleManagerTable :items="slotProps.items" />
      </template>
    </ListItems>
    <FormAddItem />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async fetch () {
    await this.$store.dispatch('managers/fetch')
  },
  computed: {
    ...mapGetters('managers',
      ['managers']
    )
  }
}
</script>

<style>

</style>
