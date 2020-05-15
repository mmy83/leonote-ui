<template>
  <div class="item-sub">
    <span class="title" @click="clickNoteBook">{{ title }}</span>
    <i class="el-icon-setting left-setting" />
    <span class="count">{{ count }}</span>
  </div>
</template>

<script>
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
    }
  },
  // render(h, context) {
  //   console.log(this)
  //   const { count, title } = this.props
  //   const vnodes = []
  //   if (title) {
  //     vnodes.push(h('span', {
  //       domProps: {
  //         innerHTML: title
  //       },
  //       on: {
  //         click: function(event) {
  //           this.$emit('clickNoteBook')
  //         }
  //       }}
  //     ))
  //   }
  //   vnodes.push(h('span', {
  //     domProps: {
  //       innerHTML: count
  //     }
  //   }))
  //   vnodes.push(h('i', {
  //     class: {
  //       'el-icon-setting': true,
  //       'left-setting': true
  //     }
  //   }))
  //
  //   return vnodes
  // },
  methods: {
    clickNoteBook() {
      this.$emit('clickNoteBook')
    }
  }
}
</script>
