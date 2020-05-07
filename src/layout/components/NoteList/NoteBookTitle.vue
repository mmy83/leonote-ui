<template>
  <div class="note-list-header">
    <div class="note-list-header-title">
      <slot></slot>
    </div>
    <svg-icon icon-class="list" />
  </div>
</template>

<script>
  export default {
    name: 'NoteBookTitle',
    components: {}
  }
</script>
