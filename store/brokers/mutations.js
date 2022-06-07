export default {
  setBrokers (state, payload) {
    state.brokers = payload
  },
  addIndividual (state, payload) {
    state.brokers.push(payload)
  }
}
