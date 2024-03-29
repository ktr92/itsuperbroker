
import UiInput from './Input'

export default {
  title: 'Ui/Input',
  component: UiInput,
  args: {
    value: '',
    inputtype: 'text',
    inputplaceholder: 'placeholder',
    inputname: 'test'
  }
}

const DefaultTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<UiInput v-bind="$props" />'
})
export const Default = DefaultTemplate.bind({})

export const WithValue = DefaultTemplate.bind({})
WithValue.args = {
  value: 'Text'
}

export const Empty = DefaultTemplate.bind({})
Empty.args = {
  value: '',
  inputtype: '',
  inputplaceholder: '',
  inputname: ''
}

export const EmailInvalid = DefaultTemplate.bind({})
EmailInvalid.args = {
  value: 'myemail.com',
  inputtype: 'email'
}

export const EmailValid = DefaultTemplate.bind({})
EmailValid.args = {
  ...EmailInvalid.args,
  value: 'email@example.com'
}
export const Password = DefaultTemplate.bind({})
Password.args = {
  value: 'password',
  inputtype: 'password'
}
