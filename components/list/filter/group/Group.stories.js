
import ListFilterGroup from './Group'

export default {
  title: 'List/Filter/Group',
  component: ListFilterGroup
}

const DefaultTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<ListFilterGroup :filtered="items" :filterby="filterprop" :searchby="searchprop" />'
})
export const Default = DefaultTemplate.bind({})
Default.args = {
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
Default.parameters = {
  docs: {
    description: {
      component: 'Компонент объединяет фильтры, передавая родительскому компоненту массив отфильтрованных данных.'
    }
  }
}
