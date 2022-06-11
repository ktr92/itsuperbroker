
import ListFilterCheckbox from './Checkbox'

export default {
  title: 'List/Filter/Checkbox',
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
Default.parameters = {
  docs: {
    description: {
      component: 'Компонент выводит принимаемые им данные в виде чекбоксов, передавая родительскому компоненту массив выбранных значений.'
    }
  }
}
export const Dublicates = DefaultTemplate.bind({
  title: 'ListFilterCheckbox 2'
})
Dublicates.args = {
  filterby: [...Default.args.filterby, { id: 1, name: 'prop1' }, { id: 1, name: 'prop1' }]
}
Dublicates.parameters = {
  docs: {
    description: {
      story: 'Компонент отображает только уникальные значения, автоматически удаляя дубликаты'
    }
  }
}
