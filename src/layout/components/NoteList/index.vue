<template>
  <div>
    <note-list-header @addNote="addNote()">{{ currentNoteBook.notebook_name }}</note-list-header>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <item v-for="note in notes" :item="note" @noteClick="setCurrentNote(note.id)"/>
    </el-scrollbar>
  </div>

</template>

<script>

import NoteListHeader from './NoteListHeader'
import Item from './Item'
import { mapGetters } from 'vuex'

export default {
  name: 'NoteList',
  components: { NoteListHeader, Item },
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
    },
    addNote() {
      console.log(this.currentNoteBook)
    }
  }
}

</script>
