<template>
<!--  <app-link :to="to">-->
  <span @click="clickNoteBook">
    {{ title }}
  </span>
<!--  </app-link>-->
</template>

<script>
// import AppLink from './Link'

export default {
  name: 'Item',
  // functional: true,
  // components: { AppLink },
  props: {
    title: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  },
  methods: {
    // setCurrentNoteBook: (notebook_id) =>{
    //   this.$emit('setCurrentNoteBook')
    // }
    clickNoteBook() {
      this.$emit('clickNoteBook')
    }
  }
}
</script>
