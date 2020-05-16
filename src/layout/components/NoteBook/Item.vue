<template>
  <div class="item-sub">
    <span class="title" @click="clickNoteBook">{{ title }}</span>

    <el-popover
      placement="right"
      width="115"
      trigger="click">
      <table>
        <tr>
          <td style="width: 15px"><i class="fa fa-sitemap"></i></td>
          <td style="width:125px;background: #ffffff">添加子笔记本</td>
        </tr>
        <tr>
          <td><i class="fa fa-edit"></i></td>
          <td style="background: #ffffff">重命名</td>
        </tr>
        <tr>
          <td><i class="fa fa-trash"></i></td>
          <td style="background: #ffffff"><span>删除</span></td>
        </tr>
      </table>

<!--     <i class="el-icon-setting left-setting" slot="reference"/>-->
      <i class="fa fa-gear left-setting" slot="reference"/>
    </el-popover>
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
  data() {
    return {
      visible: false,
      gridData: [{
        icon: 'icon',
        name: '王小虎',
      }, {
        icon: 'icon',
        name: '王小虎',
      }, {
        icon: 'icon',
        name: '王小虎',
      }, {
        icon: 'icon',
        name: '王小虎',
      }]
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
