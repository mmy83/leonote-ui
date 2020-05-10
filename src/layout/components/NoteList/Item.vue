<template>
<!--  <router-link :to="{name:'note',params:{id:item.id}}">-->
  <div class="note-list-item" @click="noteClick">
    <div class="note-list-item-title">{{item.title}}</div>
    <div class="note-list-item-info">
      <i class="fa fa-book" />
      <span>{{item.notebook.notebook_name}}</span>
      <i class="fa fa-clock-o" />
      <span>{{item.created}}</span>
    </div>
    <div>
    </div>
  </div>
<!--  </router-link>-->
</template>

<script>
export default {
  name: 'Item',
  // components: { RouterLink },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    noteClick() {
      this.$emit('noteClick')
    }
  }
}

</script>
