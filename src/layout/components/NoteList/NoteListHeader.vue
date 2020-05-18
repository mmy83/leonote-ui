<template>
  <div class="note-list-header">
    <div class="note-list-header-title">
      <slot></slot>
    </div>
<!--    <svg-icon icon-class="list" />-->

    <div class="dropdown">
      <i class="fa  fa-plus" @click="addNote"/>
<!--      <el-popover v-model="show" placement="bottom" width="115" trigger="click">-->
<!--        <table>-->
<!--          <tr>-->
<!--            <td style="width: 15px;background: #ffffff"><i class="fa fa-sitemap" /></td>-->
<!--            <td style="width:125px;background: #ffffff">时间正序</td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td><i style="background: #ffffff" class="fa fa-edit" /></td>-->
<!--            <td style="background: #ffffff">时间倒序</td>-->
<!--          </tr>-->
<!--        </table>-->
        <i slot="reference" class="fa fa-th-list" />
<!--      </el-popover>-->
    </div>

  </div>
</template>

<script>
export default {
  name: 'NoteListHeader',
  components: {},
  data() {
    return {
      show: false
    }
  },
  methods: {
    addNote() {
      this.$emit('addNote')
    }
  }
}
</script>
