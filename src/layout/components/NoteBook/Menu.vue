<template>
  <ul class="menu-bar">
    <li id="notebook">
      <div class="notebook-header">
        <i class="fa fa-book" />
        <span>笔记本</span>
        <i @click="notebookAdd" class="fa fa-plus"></i>
      </div>
<!--      <i class="fa fa-book" />-->
<!--      <span>笔记本</span>-->
<!--      <i class="fa fa-plus"></i>-->
      <transition>
        <ul class="ztree">
          <div>
            <li class="search"><input placeholder="搜索笔记本"/></li>
          </div>
          <div>
            <li>最新</li>
          </div>
          <slot></slot>
        </ul>
      </transition>
    </li>
  </ul>
</template>

<script>
import Item from './Item'

export default {
  name: 'LeoMenu',
  components: { Item },
  props: {

  },
  methods: {
    hasChild(item) {
      console.log(item)
      if (item.childrens <= 0) {
        return false
      } else {
        return true
      }
    },
    notebookAdd() {
      console.log('notebookAdd')
    }
  }
}
</script>
