<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <leo-menu>
      <note-book-item v-for="notebook in notebooks" :item="notebook" :key="notebook.id"/>
    </leo-menu>
  </el-scrollbar>
</template>

<script>
import NoteBookItem from './NoteBookItem'
import LeoMenu from './Menu'
import { mapGetters } from 'vuex'
import variables from '@/styles/variables.scss'

export default {
  name: 'NoteBook',
  components: { LeoMenu, NoteBookItem },
  computed: {
    ...mapGetters([
      'sidebar',
      'notebooks'
    ]),
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
