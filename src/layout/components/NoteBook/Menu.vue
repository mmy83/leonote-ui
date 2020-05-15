<template>
  <ul>
    <div>
      <li>
        <i class="fa fa-book" />
        <span>笔记本</span>
        <i class="fa fa-plus"></i>
        <ul>
          <div>
            <li><input /></li>
          </div>
          <div>
            <li>最新</li>
          </div>
          <slot></slot>
        </ul>
      </li>
    </div>
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
    }
  }
}
</script>
