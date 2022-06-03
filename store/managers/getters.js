export default {
  managers: state => state.managers,
  banks: state => state.managers.map(item => item.bank),
  managerById: state => id => state.managers.find(item => item.id === id),
  managerHeaders: state => state.headers
}
