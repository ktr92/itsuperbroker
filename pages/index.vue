<template>
  <div>
    <AppList />
  </div>
</template>

<script>
export default {
  layout: 'MainLayout',
  middleware: 'auth'
}
</script>
