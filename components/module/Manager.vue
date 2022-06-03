<template>
  <tr class="p-4 text-sm">
    <td>
      {{ dataitem.firstName }}
    </td>
    <td>
      {{ dataitem.lastName }}
    </td>
    <td>
      {{ dataitem.middleName }}
    </td>
    <td>
      {{ dataitem.email }}
    </td>
    <td>
      {{ dataitem.phone }}
    </td>
    <td>
      {{ dataitem.bank.name }}
    </td>
    <td>
      <button
        class="redbutton"
        @click="remove(dataitem.id)"
      >
        Удалить
      </button>
    </td>
  </tr>
</template>

<script>
// компонент для вывода данных по куратору
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
