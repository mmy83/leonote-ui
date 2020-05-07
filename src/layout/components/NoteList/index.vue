<template>
  <div>
    <note-book-title>my notebook</note-book-title>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <item v-for="note in notelist" :item="note"></item>
    </el-scrollbar>
  </div>

</template>

<script>

import NoteBookTitle from './NoteBookTitle'
import Item from './Item'

export default {
  name: 'NoteList',
  components: { NoteBookTitle, Item },
  data: () => {
    return {
      notelist: [
        { 'title': 'note one', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 1' },
        { 'title': 'note two', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 2' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
      ]
    }
  }
}

</script>
