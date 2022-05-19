<template>
  <div>
    <AppList />
    <AppAddform />
  </div>
</template>

<script>
export default {
  layout: 'MainLayout',
  middleware: 'auth'
}
</script>
