<template>
  <div>
    <LazyUiModal>
      <template #button>
        Редактировать реквизиты
      </template>
      <template #header>
        Редактирование реквизитов
      </template>
      <template #body>
        <FormEdit :input="formdata" />
      </template>
    </LazyUiModal>
  </div>
</template>

<script>
export default {
  layout: 'MainLayout',
  middleware: 'auth',
  data () {
    return {
      formdata: [
        {
          model: '1234567890',
          id: 'inn'
        },
        {
          model: 'companyName',
          id: 'ООО Юнистрой'
        },
        {
          model: '1234567890',
          id: 'ogrn'
        },
        {
          model: '1234567890',
          id: 'kpp'
        },
        {
          model: 'Москва, Пресненская набережная, 1',
          id: 'address'
        }
      ]
    }
  }
}
</script>

<style>

</style>
