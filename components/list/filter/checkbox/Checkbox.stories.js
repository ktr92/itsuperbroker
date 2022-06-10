
import ListFilterCheckbox from './Checkbox'

export default {
  title: 'ListFilterCheckbox',
  component: ListFilterCheckbox

}

const DefaultTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<ListFilterCheckbox v-bind="$props" />'
})
export const Default = DefaultTemplate.bind({})
Default.args = {
  filterby: [{ id: 1, name: 'prop1' }, { id: 2, name: 'prop2' }, { id: 3, name: 'prop3' }]
}
export const Dublicates = DefaultTemplate.bind({
  title: 'ListFilterCheckbox 2'
})
Dublicates.args = {
  filterby: [...Default.args.filterby, { id: 1, name: 'prop1' }, { id: 1, name: 'prop1' }]
}
