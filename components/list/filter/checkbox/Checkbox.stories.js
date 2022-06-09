
import ListFilterCheckbox from './Checkbox'

export default {
  title: 'ListFilterCheckbox',
  component: ListFilterCheckbox,
  args: {
    filterby: [{ id: 1, name: 'prop1' }, { id: 2, name: 'prop2' }, { id: 3, name: 'prop3' }]
  }
}

const DefaultTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<ListFilterCheckbox :filterby="filterby" />'
})
export const Default = DefaultTemplate.bind({})

export const Dublicates = DefaultTemplate.bind({
  title: 'ListFilterCheckbox 2'
})
Dublicates.args = {
  filterby: [{ id: 1, name: 'prop1' }, { id: 1, name: 'prop1' }, { id: 3, name: 'prop3' }]
}
