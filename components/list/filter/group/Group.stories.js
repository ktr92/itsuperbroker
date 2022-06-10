
import ListFilterGroup from './Group'

export default {
  title: 'ListFilterGroup',
  component: ListFilterGroup,
  args: {
    items: [
      {
        id: '10',
        partner: {
          type: 'llc',
          id: 0,
          name: 'Юнистрой'
        },
        email: 'test@email.com',
        firstName: 'Иван',
        lastName: 'Иванов',
        middleName: 'Иванович',
        phone: '71234567891',
        bank: {
          id: '10',
          name: 'ВТБ 24'
        }
      }
    ],
    filterprop: 'bank',
    searchprop: ['email', 'phone', 'firstName', 'lastName', 'middleName']
  }
}

const DefaultTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<LazyListFilterGroup v-bind="$props" />'
})
export const Default = DefaultTemplate.bind({})
