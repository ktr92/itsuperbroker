<template>
  <thead>
    <tr>
      <th v-for="item in dataheader" :key="item">
        {{ item }}
      </th>
    </tr>
  </thead>
</template>

<script>
// компонент для вывода заголовков таблицы
export default {
  props: {
    headers: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      dataheader: this.headers
    }
  }
}
</script>

<style>

</style>
