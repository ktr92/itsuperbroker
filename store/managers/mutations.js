export default {
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
