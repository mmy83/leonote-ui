<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <!-- 我的笔记本 -->
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <el-submenu index="-100">
          <template slot="title">
            <i class="fa fa-book fa-left" />
            <span>我的笔记本</span>
          </template>

          <div class="folderHeader" v-if="!isCollapse">
            <i class="fa fa-plus" />
          </div>

          <!-- 搜索 -->
          <div class="search-notebook" v-if="!isCollapse">
            <el-input placeholder="查找笔记本"></el-input>
          </div>

          <note-book-item v-for="notebook in notebooks" :key="notebook.id" :item="notebook" />
        </el-submenu>

        <!-- 我的标签 -->
        <el-submenu index="-200">
          <template slot="title">

            <i class="fa fa-bookmark fa-left" />
            <span>Tags</span>

          </template>

<!--          <el-menu-item v-for="tag in tags">-->
<!--            <a :href="['#/tag/'+tag.id]">{{tag.tag_name}}</a>-->
<!--          </el-menu-item>-->

        </el-submenu>

        <!-- <el-submenu> -->
        <!-- 我的分享 -->
        <!-- <div> -->
        <!-- </div> -->
        <!-- </el-submenu> -->

      </el-menu>

    </el-scrollbar>

  </div>
</template>

<script>

import NoteBookItem from '@/layout/components/NoteBook/NoteBookItem'
import { mapGetters } from 'vuex'
import variables from '@/styles/variables.scss'

export default {
  name: 'NoteBook',
  components: { NoteBookItem },
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
