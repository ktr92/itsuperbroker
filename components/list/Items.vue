<template>
  <div>
    <div class="w-full p-4">
      <h1 class="my-4">
        <slot name="title" />
      </h1>
      <div>
        <LazyListFilterGroup
          :itemsfilter.sync="itemsfilter"
          :namespace="namespace"
          :filterby="filterprop"
          :searchby="searchprop"
        />
        <template
          v-if="itemsfilter.length"
          class="my-4"
        >
          <slot name="items" :items="itemsfilter" />
        </template>
        <div v-else class="my-4">
          Ничего не найдено...
        </div>
        <slot name="nav" />
      </div>
    </div>
  </div>
</template>

<script>
import listitems from '@/mixins/list-items'

// компонент для вывода фильтрованных данных
export default {
  mixins: [listitems]
}
</script>

<style>

</style>
