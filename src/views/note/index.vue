<template>
  <div class="note-page">

    <div class="note-tag">
      <ul class="note-tags">
        <li v-for="item in currentNote.tags" :key="item.id">{{item.tag_name}} <i @click="delTag(item)" class="fa fa-remove"></i></li>
      </ul>
      <i class="fa fa-bookmark-o" />
      &nbsp;
      <span v-if="!addtag" @click="changeAdd">点击添加</span>
      <span v-if="addtag" class="add-tag"><input ref="addtag" @blur="changeSave"/></span>
      <div class="note-tools">
        <i v-if="isedit" @click="noteShow" class="fa fa-eye"></i><i v-if="!isedit" @click="noteEdit" class="fa fa-edit"></i>
        <i class="fa fa-save" @click="noteSave"></i>
        <i class="fa fa-paperclip"></i>
        <i class="fa fa-history"></i>
      </div>
    </div>
    <template v-if="isedit && currentNote.ismd == 0">
      <div class="note-title">
        <input v-model="currentNote.title" />
      </div>
      <div class="note-content">
        <tinymce :value="currentNote.content" :height="300" />
      </div>
    </template>
    <template v-if="isedit && currentNote.ismd==1">
      <div class="note-title">
        <input v-model="currentNote.title" />
      </div>
      <div class="note-content">
        <markdown-editor ref="markdownEditor" :value="currentNote.content" height="400px" />
      </div>
    </template>

    <template v-if="!isedit">
      <div class="note-title">
        {{currentNote.title}}
      </div>
      <div class="note-time">Created：{{currentNote.created }}&nbsp;&nbsp;&nbsp;&nbsp;Updated：{{currentNote.updated}}</div>
      <div class="note-content">
        {{currentNote.content}}
      </div>
    </template>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import Tinymce from '@/components/Tinymce'
import MarkdownEditor from '@/components/MarkdownEditor'

export default {
  components: { Tinymce, MarkdownEditor },
  data() {
    return {
      addtag: false,
      isedit: false
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'currentNote'
    ])
  },
  mounted() {
    const id = this.$route.params.id
    this.$store.dispatch('note/getNote', id)
  },
  methods: {
    delTag(item) {
      console.log(item)
      console.log('delTag')
    },
    changeAdd() {
      console.log('changeAdd')
      this.addtag = true
      console.log(this.addtag)
      this.$nextTick(() => {
        this.$refs.addtag.focus()
      })
    },
    changeSave() {
      console.log('changeSave')
      this.addtag = false
      console.log(this.addtag)
    },
    noteEdit() {
      console.log('noteEdit')
      this.isedit = true
      console.log(this.isedit)
    },
    noteShow() {
      console.log('noteShow')
      this.isedit = false
      console.log(this.isedit)
    },
    noteSave() {
      console.log('noteSave')
    }
  }

}
</script>
