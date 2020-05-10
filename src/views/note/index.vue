<template>
  <h1>
    欢迎光临!!!!!!!!!!!!
    {{$route.params.id}}---
    {{currentNote.title}}
  </h1>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  computed: {
    ...mapGetters([
      'sidebar',
      'currentNote'
    ])
  }

}
</script>
