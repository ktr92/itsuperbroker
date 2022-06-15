<template>
  <div>
    <ModulePartnerMain />
    <ModuleManagerMain />
    <!-- <ModuleBrokerMain /> -->
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
