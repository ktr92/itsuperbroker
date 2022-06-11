export default {
  title: 'List/Filter/Search'
}
export const Default = () => '<ListFilterSearch />'
Default.parameters = {
  docs: {
    description: {
      component: 'Компонент передает родителю вводимую строку'
    }
  }
}

export const Custom = () => '<ListFilterSearch placeholder="Поиск по контактам" />'
Custom.parameters = {
  docs: {
    description: {
      story: 'Можно установить любой placeholder'
    }
  }
}
