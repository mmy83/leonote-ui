<template>
  <router-link :to="{name:'note',params:{id:item.id}}">
    <div class="note-list-item">
      <div class="note-list-item-title">{{item.title}}<i @click="delNote(item)" class="fa fa-trash" style="margin-right:5px;float: right"/></div>
      <div class="note-list-item-info">
        <i class="fa fa-book" />
        <span>{{item.notebook.notebook_name}}</span>
        <i class="fa fa-clock-o" />
        <span>{{item.created}}</span>
      </div>
      <div class="note-list-item-summary">
        {{item.summary}}
      </div>
    </div>
  </router-link>
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
    delNote(item) {
      console.log(item)
      console.log('delNote')
    }
  }
}

</script>
