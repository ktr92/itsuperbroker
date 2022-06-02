<template>
  <tr class="p-4 text-sm">
    <td v-for="prop in dataitem" :key="prop">
      {{ prop }}
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      dataitem: this.item
    }
  }
}
</script>

<style>

</style>
