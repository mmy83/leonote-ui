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

          <!-- <el-menu-item v-if="!isCollapse">-->
          <!-- <template slot="title">-->
          <!-- <div class="folderHeader">-->
          <!-- <i class="fa fa-plus" />-->
          <!-- </div>-->
          <!-- </template>-->
          <!-- </el-menu-item>-->

          <!-- 搜索 -->
          <!--              <el-menu-item v-if="!isCollapse">-->
          <!--                <template slot="title">-->
          <!--                  <div class="search-notebook">-->
          <!--                    <el-input placeholder="查找笔记本"></el-input>-->
          <!--                  </div>-->
          <!--                </template>-->
          <!--              </el-menu-item>-->

          <note-book-item v-for="notebook in notebooks" :key="notebook.id" :item="notebook" />
        </el-submenu>

        <!-- 我的标签 -->
        <el-submenu index="-200">
          <template slot="title">

            <i class="fa fa-bookmark fa-left" />
            <span>Tags</span>

          </template>

          <el-menu-item v-for="tag in tags">
            <span>{{tag.tag_name}}</span>
          </el-menu-item>

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
      'sidebar'
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
  },
  data: () => {
    return {
      notebooks: [
        {
          'id': 1,
          'notebook_name': '我的笔记 1',
          'childrens': [
            {
              'id': 2,
              'notebook_name': '我的笔记 2',
              'childrens': [
                {
                  'id': 3,
                  'notebook_name': '我的笔记 3',
                  'childrens': []
                }
              ]
            }
          ]
        },
        {
          'id': 4,
          'notebook_name': '我的笔记 4',
          'childrens': [
            {
              'id': 5,
              'notebook_name': '我的笔记 5',
              'childrens': [
                {
                  'id': 6,
                  'notebook_name': '我的笔记 6',
                  'childrens': []
                }
              ]
            }
          ]
        }
      ],
      'tags': [
        {
          'id': 1,
          'tag_name': 't1'
        },
        {
          'id': 2,
          'tag_name': 't2'
        },
        {
          'id': 3,
          'tag_name': 't3'
        }
      ]
    }
  }
}
</script>
