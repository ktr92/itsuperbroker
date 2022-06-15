
import UiModal from './Modal'

export default {
  title: 'Ui/Modal',
  component: UiModal

}

const DefaultTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<UiModal />'
})
export const Default = DefaultTemplate.bind({})
Default.args = {
}

const SlotTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `<UiModal>
      <template #header>
        Войдите в систему
      </template>
      <template #body>
        <FormLogin />
      </template></UiModal>`
})
export const SlotExample = SlotTemplate.bind({})
Default.args = {

}
