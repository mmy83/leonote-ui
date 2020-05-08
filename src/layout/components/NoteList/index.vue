<template>
  <div>
    <note-book-title>my notebook</note-book-title>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <item v-for="note in notelist" :item="note" />
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
        { 'id': '1', 'title': 'note one', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 1' },
        { 'id': '2', 'title': 'note two', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 2' },
        { 'id': '3', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '4', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '5', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '6', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
        { 'id': '7', 'title': 'note three', 'date': '2020-05-07 12:12:12', 'notebook': 'my notebook 3' },
      ]
    }
  }
}

</script>
