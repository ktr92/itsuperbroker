export default {
  brokers: state => state.brokers,
  brokerid: state => id => state.brokers.find(item => item.id === id)
}
