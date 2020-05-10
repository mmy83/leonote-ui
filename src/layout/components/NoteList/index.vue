<template>
  <div>
    <note-book-title>{{ currentNoteBook.notebook_name }}</note-book-title>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <item v-for="note in notes" :item="note" @noteClick="setCurrentNote(note.id)"/>
    </el-scrollbar>
  </div>

</template>

<script>

import NoteBookTitle from './NoteBookTitle'
import Item from './Item'
import { mapGetters } from 'vuex'

export default {
  name: 'NoteList',
  components: { NoteBookTitle, Item },
  computed: {
    ...mapGetters([
      'sidebar',
      'notes',
      'currentNoteBook'
    ])
  },
  methods: {
    setCurrentNote(id) {
      this.$store.dispatch('note/getNote', id)
    }
  }
}

</script>
