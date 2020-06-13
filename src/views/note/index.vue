<template>
  <div class="note-page">
    <template v-if="currentNote.type=='edit' && currentNote.ismd == 0">
      <div class="note-tag">
        <ul class="note-tags">
          <li v-for="item in currentNote.tags" :key="item.id">{{item.tag_name}} <i class="fa fa-remove"></i></li>
        </ul>
        <div class="note-tools">
          <i class="fa fa-edit"></i>
          <i class="fa fa-save"></i>
          <i class="fa fa-paperclip"></i>
          <i class="fa fa-history"></i>
        </div>
      </div>
      <div class="note-title">
        <input v-model="currentNote.title" />
      </div>
      <div class="note-content">
        <tinymce :value="currentNote.content" :height="300" />
      </div>

    </template>
    <template v-if="currentNote.type=='edit' && currentNote.ismd==1">
      <div class="note-tag">
        <ul class="note-tags">
          <li v-for="item in currentNote.tags" :key="item.id"> {{item.tag_name}} <i class="fa fa-remove"></i></li>
        </ul>
        <div class="note-tools">
          <i class="fa fa-edit"></i>
          <i class="fa fa-save"></i>
          <i class="fa fa-paperclip"></i>
          <i class="fa fa-history"></i>
        </div>
      </div>
      <div class="note-title">
        <input v-model="currentNote.title" />
      </div>
      <div class="note-content">
        <markdown-editor ref="markdownEditor" :value="currentNote.content" height="300px" />
      </div>
    </template>
    <template v-if="!currentNote.type">
      <div class="note-tag">
        <ul class="note-tags">
          <li v-for="item in currentNote.tags" :key="item.id">{{item.tag_name}} <i class="fa fa-remove"></i></li>
        </ul>
        <div class="note-tools">
          <i class="fa fa-edit"></i>
          <i class="fa fa-save"></i>
          <i class="fa fa-paperclip"></i>
          <i class="fa fa-history"></i>
        </div>
      </div>
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
  computed: {
    ...mapGetters([
      'sidebar',
      'currentNote'
    ])
  },
  mounted() {
    const id = this.$route.params.id
    this.$store.dispatch('note/getNote', id)
  }

}
</script>
