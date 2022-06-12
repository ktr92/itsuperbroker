
import ListPager from './Pager'

export default {
  title: 'List/Pager',
  component: ListPager,
  args: {
    totalItemsProp: 30,
    currentPageProp: 1,
    perPageProp: 10
  }
}

const DefaultTemplate = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<ListPager v-bind="$props" />'
})
export const Default = DefaultTemplate.bind({})
Default.parameters = {
  docs: {
    description: {
      component: 'Компонент для пагинации списков. totalItemsProp - всего элементов, currentPageProp - текущая страница, perPageProp - количество элементов на странице'
    }
  }
}

export const Much = DefaultTemplate.bind({})
Much.args = {
  totalItemsProp: 50,
  currentPageProp: 1,
  perPageProp: 5
}

export const TooMuch = DefaultTemplate.bind({})
TooMuch.args = {
  totalItemsProp: 200,
  currentPageProp: 10,
  perPageProp: 10
}
