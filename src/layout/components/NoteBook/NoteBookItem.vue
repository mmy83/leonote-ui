<template>
  <div>
    <template v-if="!hasChild(item)">
      <li>
        <item :title="item.notebook_name" @clickNoteBook="setCurrentNoteBook(item)"/>
      </li>
    </template>

    <sub-menu v-else ref="subMenu" :index="resolvePath(item.id)" popper-append-to-body>
      <template slot="title">
        <item :title="item.notebook_name" @clickNoteBook="setCurrentNoteBook(item)"/>
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
import Item from './Item'
import SubMenu from './SubMenu'
import { isExternal } from '@/utils/validate'
import path from 'path'
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  name: 'NoteBookItem',
  components: { Item, SubMenu },
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
    setCurrentNoteBook(notebook) {
      console.log('setCurrentNoteBook')
      this.$store.dispatch('notebook/setCurrentNoteBook', notebook)
      this.$store.dispatch('note/getNoteList', notebook.id)
    }
  }
}

</script>
