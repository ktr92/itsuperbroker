<template>
  <div class="modal">
    <div class="modal__wrapper">
      <div class="modal__content">
        <div class="modal__header">
          <slot name="header" />
          <button type="button" class="modal__close" @click.prevent="$emit('closeModal')">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
          </button>
        </div>
        <div class="modal__body">
          <slot name="body">
            Здесь ничего нет...
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
@tailwind components;
@layer components {
  .modal {
    @apply overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 md:h-full
  }
  .modal__wrapper {
    @apply relative p-4 w-full  h-full flex items-center justify-center
  }
  .modal__content {
    @apply relative bg-white h-auto rounded-lg shadow w-full max-w-xl
  }
  .modal__header {
    @apply flex justify-between items-start p-4 rounded-t border-b
  }
  .modal__close {
    @apply text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-2 ml-auto items-center
  }
  .modal__body {
    @apply p-6 space-y-6
  }
}
</style>
