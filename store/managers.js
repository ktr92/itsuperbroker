
export const state = () => ({
  managers: []
})

export const mutations = {
  setManagers (state, payload) {
    state.managers = payload
  },
  addManager (state, payload) {
    state.managers.push(payload)
  },
  removeManager (state, payload) {
    state.managers = state.managers.filter(item => item.id !== payload)
  }
}

export const actions = {
  async fetch ({
    dispatch,
    commit
  }, id) {
    try {
      const data = await this.$axios.get(`${process.env.api}/bank/manager/list?page=1&limit=30`)
      commit('setManagers', data.data.data)
    } catch (e) {
      dispatch('setMessage', {
        value: `${e.response.data.code}: ${e.response.data.message}`,
        type: 'error'
      }, {
        root: true
      })
    }
  },
  async add ({
    dispatch,
    commit
  }, payload) {
    try {
      const response = await this.$axios.post(`${process.env.api}/bank/manager`, payload)
      commit('addManager', response.data)
    } catch (e) {
      dispatch('setMessage', { value: `${e.response.data.code}: ${e.response.data.message}`, type: 'error' }, { root: true })
    }
  },
  async remove ({
    dispatch,
    commit,
    getters
  }, payload) {
    try {
      await this.$axios.delete(`${process.env.api}/bank/manager/${payload}`).then((response) => {
        dispatch('setMessage', { value: `${getters.itembyid(payload).email} удален`, type: 'warn' }, { root: true })
      })
      commit('removeManager', payload)
    } catch (e) {
      dispatch('setMessage', {
        value: `${e.response.data.code}: ${e.response.data.message}`,
        type: 'error'
      }, {
        root: true
      })
    }
  }
}

export const getters = {
  items: state => state.managers,
  banks: state => state.managers.map(item => item.bank),
  itembyid: state => id => state.managers.find(item => item.id === id)
}
