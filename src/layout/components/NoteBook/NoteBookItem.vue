<template>
  <div>
    <template v-if="!hasChild(item)">
      <el-menu-item :index="resolvePath(item.id)" :class="{'submenu-title-noDropdown':!isNest}">
        <item :title="item.notebook_name" :to="resolvePath(item.id)"/>
      </el-menu-item>
    </template>

    <el-submenu v-else ref="subMenu" :index="resolvePath(item.id)" popper-append-to-body>
      <template slot="title">
        <item :title="item.notebook_name" :to="resolvePath(item.id)"/>
      </template>
      <note-book-item
        v-for="child in item.childrens"
        :key="child.id"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.id)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script>
import Item from './Item'
import { isExternal } from '@/utils/validate'
import path from 'path'

export default {
  name: 'NoteBookItem',
  components: { Item },
  props: {
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
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
      return path.resolve('/note/' + routePath)
    }
  }
}

</script>
