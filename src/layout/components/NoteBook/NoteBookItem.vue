<template>
  <div>
    <template v-if="!hasChild(item)">
      <li>
        <item :isadd="item.isAdd" :count="item.count" :title="item.notebook_name" @changeAddInput="changeAddInput(item)" @delNote="delNote(item)" @renameNotebook="renameNotebook(item)" @addChildNotebook="addChildNotebook(item)" @clickNoteBook="setCurrentNoteBook(item)"/>
      </li>
    </template>

    <sub-menu v-else ref="subMenu" :index="resolvePath(item)" popper-append-to-body>
      <template slot="title">
        <item :isadd="item.isAdd" :count="item.count" :title="item.notebook_name" @changeAddInput="changeAddInput(item)" @delNote="delNote(item)" @renameNotebook="renameNotebook(item)" @addChildNotebook="addChildNotebook(item)" @clickNoteBook="setCurrentNoteBook(item)"/>
      </template>
      <note-book-item
        v-for="child in item.childrens"
        :key="child.id"
        :item="child"
      />
    </sub-menu>
  </div>
</template>

<script>
import Vue from 'vue';
import Item from './Item'
import SubMenu from './SubMenu'
import { isExternal } from '@/utils/validate'
import path from 'path'
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  name: 'NoteBookItem',
  components: { Item, SubMenu },
  computed: {
    ...mapGetters([
      'notes',
      'currentNote',
      'currentNoteBook'
    ])
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: () => {
    return {
      showChild: false
    }
  },
  methods: {
    hasChild(item) {
      if (item.childrens.length > 0) {
        return true
      } else {
        return false
      }
    },
    resolvePath(routePath) {
      return path.resolve('#/note/' + routePath)
    },
    async setCurrentNoteBook(notebook) {

      await store.dispatch('notebook/setCurrentNoteBook', notebook)
      await store.dispatch('note/getNoteList', notebook.id)

      if (this.notes.length > 0) {
        console.log('--get note--')
        // await store.dispatch('note/getNote', this.notes[0].id)
        this.$router.push({ name: 'note', params: { id: this.notes[0].id }})
      } else {
        // await store.dispatch('note/setCurrentNote', {})
      }
    },
    changeAddInput(notebook) {
      notebook.childrens.unshift({ id: 0, notebook_name: '添加笔记', isAdd: true, childrens: [] })
    },
    addChildNotebook(notebook) {
      // notebook.childrens.unshift({ id: 0, notebook_name: '', isAdd: true, childrens: [] })
    },
    renameNotebook(notebook) {
      // console.log(this.$el.getElementsByClassName('title')[0].remove())
    },
    delNote(notebook) {
      console.log(notebook)
      // console.log(this.$el.remove())
    }
  }
}

</script>
