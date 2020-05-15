<template>
  <li>
    <i v-if="showChild" class="fa fa-angle-down" @click="changeChild"/>
    <i v-else class="fa fa-angle-right" @click="changeChild"/>
    <slot name="title"></slot>
    <transition name={menuTransitionName}>
      <ul v-if="showChild">
        <slot></slot>
      </ul>
    </transition>
  </li>
</template>

<script>
export default {
  name: 'SubMenu',
  props: {

  },
  data: () => {
    return {
      showChild: true
    }
  },
  methods: {
    changeChild() {
      this.showChild = !this.showChild
      // this.$emit('changeChild')
    }
  }

}
</script>
