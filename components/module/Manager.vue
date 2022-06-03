<template>
  <table>
    <thead>
      <tr>
        <th v-for="item in dataheader" :key="item">
          {{ item }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in dataitems"
        :key="item"
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
          {{ item.bank.name }}
        </td>
        <td>
          <button
            class="redbutton"
            @click="remove(item.id)"
          >
            Удалить
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
// компонент для вывода данных по куратору
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    headerlist: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      dataitems: this.items,
      dataheader: this.headerlist
    }
  },
  watch: {
    items () {
      this.dataitems = this.items
    }
  },
  methods: {
    async remove (id) {
      if (confirm(`Удалить ${this.$store.getters['managers/managerById'](id).email}?`)) {
        await this.$store.dispatch('managers/remove', id)
      }
    }
  }
}
</script>

<style>

</style>
