<template>
  <table>
    <thead v-if="dataheader.length">
      <tr>
        <th v-for="item in dataheader" :key="item">
          {{ item }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in dataitems"
        :key="item.id"
        class="p-4 text-sm"
      >
        <td>
          {{ item.firstName }}
        </td>
        <td>
          {{ item.lastName }}
        </td>
        <td>
          {{ item.middleName }}
        </td>
        <td>
          {{ item.email }}
        </td>
        <td>
          {{ item.phone }}
        </td>
        <td>
          <button
            class="redbutton"
            @click="remove(item.id)"
          >
            &times;
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import moduleview from '@/mixins/module-view'
// компонент для вывода данных по брокерам (вид таблицы)
export default {
  mixins: [moduleview]
}
</script>

<style>

</style>
