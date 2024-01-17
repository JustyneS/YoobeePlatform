<template>
  <div class="MyNotesPage">

    <h1>My Notes Page</h1>

    <button @click="getNotes">View Notes</button>
    <button @click="getHighlights">View Highlights</button>
    <button @click="getBookmarks">View Bookmarks</button>

    <div v-for="note in notes" :key="note.id">
      <p>{{ note.content }}</p>
    </div>

    <div v-for="highlight in highlights" :key="highlight.id">
      <p>{{ highlight.content }}</p>
    </div>

    <div v-for="bookmark in bookmarks" :key="bookmark.id">
      <p>{{ bookmark.content }}</p>
    </div>

  </div>
</template>


<script>
import axios from 'axios';

export default {
  name: 'MyNotesPage',
  data() {
    return {
      notes: [],
      bookmarks: [],
      highlights: [],
    };
  },
  methods: {
    getNotes() {
      axios.get('http://localhost:8000/notes/')
        .then(response => {
          this.notes = response.data;
        });
    },
    getHighlights() {
      axios.get('http://localhost:8000/highlights/')
        .then(response => {
          this.highlights = response.data;
        });
    },
    getBookmarks() {
      axios.get('http://localhost:8000/bookmarks/')
        .then(response => {
          this.bookmarks = response.data;
        });
    },
  },
};
</script>




<style scoped>

</style>

