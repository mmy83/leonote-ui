<template>
  <a href="">
    <div class="note-list-item">
      <div class="note-list-item-title">{{item.title}}</div>
      <div class="note-list-item-info"><span>{{item.notebook}}</span><span>{{item.date}}</span></div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}

</script>
