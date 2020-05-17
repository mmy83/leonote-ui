<template>
  <div class="item-sub">
    <span v-if="!add && !rename" class="title" @dblclick="changeRenameInput" @click="clickNoteBook">{{ title }}</span>
    <span v-if="add"><input @blur="addChildNotebook" ref="addNotebookInput" class="add-notebook-input" :value="title" style="width: 120px"></span>
    <span v-if="rename"><input @blur="renameNotebook" ref="renameNotebookInput" class="rename-notebook-input" :value="title" style="width: 120px"></span>
    <el-popover v-model="show" placement="right" width="115" trigger="click">
      <table>
        <tr>
          <td style="width: 15px"><i class="fa fa-sitemap" /></td>
          <td style="width:125px;background: #ffffff" @click="changeAddInput">添加子笔记本</td>
        </tr>
        <tr>
          <td><i class="fa fa-edit" /></td>
          <td style="background: #ffffff" @click="changeRenameInput">重命名</td>
        </tr>
        <tr>
          <td><i class="fa fa-trash" /></td>
          <td style="background: #ffffff" @click="delNote">删除</td>
        </tr>
      </table>
      <!--     <i class="el-icon-setting left-setting" slot="reference"/>-->
      <i slot="reference" class="fa fa-gear left-setting" />
    </el-popover>
    <span class="count">{{ count }}</span>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  // functional: true,
  props: {
    title: {
      type: String,
      default: ''
    },
    count: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      rename: false,
      add: false,
      show: false
    }
  },
  methods: {
    clickNoteBook() {
      this.$emit('clickNoteBook')
    },
    changeAddInput() {
      this.show = false
      this.add = true
      // 然后调用focus方法
      this.$nextTick(() => {
        this.$refs.addNotebookInput.focus()
      })
    },
    changeRenameInput() {
      this.show = false
      this.rename = true
      // 然后调用focus方法
      this.$nextTick(() => {
        this.$refs.renameNotebookInput.focus()
      })
    },
    addChildNotebook() {
      // this.$emit('addChildNotebook')
      this.add = false
    },
    renameNotebook() {
      // this.$emit('renameNotebook')
      this.rename = false
    },
    delNote() {
      this.show = false
      this.$emit('delNote')
    }
  }
}
</script>
