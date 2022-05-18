export const state = () => ({
  managers: []
})

export const mutations = {
}

export const actions = {
  async fetch ({ dispatch }, id) {
    try {
      return await this.$axios.get('https://api-broker.demo.ipotech.su/api/v1/bank/manager/list?page=1&limit=10')
    } catch (e) {
      dispatch('setMessage', { value: 'Не удалось получить список менеджеров', type: 'error' }, { root: true })
    }
  }
}

export const getters = {
  managers: state => state.managers
}
