<template>
  <a :href="['/note/'+item.id]">
    <div class="note-list-item">
      <div class="note-list-item-title">{{item.title}}</div>
      <div class="note-list-item-info">
        <i class="el-icon-notebook-2" />
        <span>{{item.notebook}}</span>
        <i class="el-icon-time" />
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
