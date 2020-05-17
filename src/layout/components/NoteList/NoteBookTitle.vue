<template>
  <div class="note-list-header">
    <div class="note-list-header-title">
      <slot></slot>
    </div>
<!--    <svg-icon icon-class="list" />-->

    <div class="dropdown">
      <i class="fa  fa-plus" />
      <i class="fa fa-th-list" />
    </div>

  </div>
</template>

<script>
export default {
  name: 'NoteBookTitle',
  components: {}
}
</script>
