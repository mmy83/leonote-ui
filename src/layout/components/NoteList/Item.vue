<template>
  <a :href="['/note/'+item.id]">
    <div class="note-list-item">
      <div class="note-list-item-title">{{item.title}}</div>
      <div class="note-list-item-info">
        <i class="fa fa-book" />
        <span>{{item.notebook}}</span>
        <i class="fa fa-clock-o" />
        <span>{{item.date}}</span>
      </div>
      <div>
      </div>
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
