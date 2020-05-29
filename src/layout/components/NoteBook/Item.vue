<template>
  <div class="item-sub">
    <span v-if="!add && !rename" class="title" @dblclick="changeRenameInput" @click="clickNoteBook">{{ title }}</span>
    <span v-if="add"><input ref="addNotebookInput" :value="title" style="width: 120px" @blur="addChildNotebook"></span>
    <span v-if="rename"><input ref="renameNotebookInput" :value="title" style="width: 120px" @blur="renameNotebook"></span>
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
let time = null
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
    },
    isadd: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      rename: false,
      show: false,
      add: this.isadd
    }
  },
  watch: {
    add(value, oldValue) {
      if (value) {
        this.$nextTick(() => {
          this.$refs.addNotebookInput.focus()
        })
      }
      console.log('add')
    },
    rename(value, oldValue) {
      if (value) {
        this.$nextTick(() => {
          this.$refs.renameNotebookInput.focus()
        })
      }
      console.log('rename')
    }
  },
  methods: {
    clickNoteBook() {
      clearTimeout(time)
      time = setTimeout(() => {
        this.$emit('clickNoteBook')
      }, 300)
    },
    changeAddInput() {
      this.show = false
      // this.add = true
      this.$emit('changeAddInput')
    },
    changeRenameInput() {
      clearTimeout(time)
      this.show = false
      this.rename = true
    },
    addChildNotebook() {
      this.add = false
      this.$emit('addChildNotebook')
    },
    renameNotebook() {
      this.rename = false
      this.$emit('renameNotebook')
    },
    delNote() {
      this.show = false
      this.$emit('delNote')
    }
  }
}
</script>
