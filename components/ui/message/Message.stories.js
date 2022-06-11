import Message from './Message'

export default {
  title: 'Ui/Message',
  component: Message
}

const Template = (args, { argTypes }) => ({
  components: { Message },
  props: Object.keys(argTypes),
  template: '<Message v-bind="$props" />'
})

export const Default = Template.bind({})
Default.args = {
  entrymessage: null
}
Default.parameters = {
  docs: {
    description: {
      component: 'Компонент для оповещения о событиях (ошибки, успешные запросы и т.д.). По умолчанию компонент скрыт. Появляется только при наличии сообщения.'
    }
  }
}
export const Info = Template.bind({})
Info.args = {
  entrymessage: {
    type: 'info',
    value: 'Сообщение об успешном событии '
  }
}
export const Error = Template.bind({})
Error.args = {
  entrymessage: {
    type: 'error',
    value: 'Сообщение об ошибке'
  }
}

export const Warning = Template.bind({})
Warning.args = {
  entrymessage: {
    type: 'warning',
    value: 'Информационное сообщение'
  }
}
