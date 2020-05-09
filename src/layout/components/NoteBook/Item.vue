<template>
  <app-link :to="to">
    {{title}}
  </app-link>
</template>

<script>
import AppLink from './Link'

export default {
  name: 'Item',
  // functional: true,
  components: { AppLink },
  props: {
    title: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  }
}
</script>
