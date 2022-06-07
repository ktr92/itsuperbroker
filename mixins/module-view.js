import { ACTION_REMOVE } from '@/store/action-types'
import { GETTER_GETONE } from '@/store/getter-types'
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    headers: {
      type: Array,
      required: true
    },
    namespace: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      dataitems: this.items,
      dataheader: this.headers
    }
  },

  watch: {
    items () {
      this.dataitems = this.items
    }
  },
  methods: {
    async remove (id) {
      if (confirm(`Удалить ${this.$store.getters[`${this.namespace}/${GETTER_GETONE}`](id).email}?`)) {
        await this.$store.dispatch(`${this.namespace}/${ACTION_REMOVE}`, id)
      }
    }
  }
}
