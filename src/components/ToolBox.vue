<template>
  <!-- The toolbox component -->
  <div class="toolbox" v-show="showBox">
    <!-- The textarea for writing a note, displayed if showNoteArea is true -->
    <textarea v-if="showNoteArea" v-model="noteContent" class="note-textarea"></textarea>
    <!-- The button to toggle the note area and submit a note -->
    <button class="toolbox-button" @click="toggleNoteArea"><i class="fa-solid fa-pencil"></i> {{ showNoteArea ? 'Save Note' : 'Take Note' }}</button>
    <!-- The button to add a bookmark -->
    <button class="toolbox-button" @click="addBookmark"><i class="fas fa-bookmark"></i> Bookmark</button>
  </div>
  <!-- The button to toggle the toolbox -->
  <button class="toggle-button" @click="toggleBox"><i class="fa-solid fa-screwdriver-wrench"></i></button>
</template>

<script>
// Importing Firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

export default {
  name: 'ToolBox', // The name of the component
  data() {
    return {
      showBox: false, // The data property for storing the display state of the toolbox
      noteContent: '', // The data property for storing the content of the note
      showNoteArea: false, // The data property for storing the display state of the note area
    };
  },
  methods: {
    // The method to toggle the toolbox
    toggleBox() {
      this.showBox = !this.showBox;
    },
    // The method to toggle the note area and submit a note
    toggleNoteArea() {
      if (this.showNoteArea && this.noteContent) {
        // If the note area is displayed and there is note content, submit the note to Firebase
        firebase.database().ref('notes').push({
          content: this.noteContent,
          timestamp: new Date().toISOString(),
        });
        // Clear the note content
        this.noteContent = '';
      }
      // Toggle the display of the note area
      this.showNoteArea = !this.showNoteArea;
    },
    // The method to take a note
    takeNote() {
      if (this.noteContent) {
        // If there is note content, submit the note to Firebase with a timestamp
        const date =new Date();
        const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
        firebase.database().ref('notes').push({
          content: this.noteContent,
          timestamp: formattedDate, // add a timestamp
        });
        // Clear the note content and hide the note area
        this.noteContent = ''; // clear the note content
        this.showNoteArea = false;
      }
    },
    // The method to add a bookmark
    addBookmark() {
      if (this.currentSection !== null) {
        // If there is a current section, emit the addBookmark event and add the bookmark to Firebase
        this.$emit('addBookmark', this.currentSection);
        firebase.database().ref('bookmarks').push({
          section: this.currentSection,
        })
      }
    },
    // The method to handle the scroll event
    handleScroll() {
      // Get all the paragraphs in the document
      let sections = document.querySelectorAll('p');
      // Loop through each paragraph
      sections.forEach(section => {
        // Get the bounding rectangle of the paragraph
        let rect = section.getBoundingClientRect();
        // If the paragraph is in the viewport, set it as the current section
        if(rect.top >= 0 && rect.bottom <= window.innerHeight) {
          this.currentSection = section.id;
        }
      });
    },
  },
  // When the component is mounted, add an event listener for the scroll event
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  // Before the component is unmounted, remove the event listener for the scroll event
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>



<style scoped>
.toolbox {
  position: fixed;
  top: 50%;
  right: 0;
  width: 200px;
  height: 250px;
  padding: 20px;
  background-color: transparent;
  overflow-y: auto;
  transform: translateY(-50%);
}
.toggle-button {
  position: fixed;
  top: 45%;
  right: 0;
  padding: 10px;
  margin-right: 10px;
  font-size: 24px;
  background-color: rgb(208 ,179,255);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transform: translateY(-50%);
}
.toolbox-button {
  display: block;
  width: 60%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  text-align: left;
  color: #495057;
  background-color: tran;
  border: none;
  border-radius: 5px;
  border-style: solid;
  border-width: 2px;
  border-color: rgb(189,137,255);
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.toolbox-button:hover {
  background-color: rgb(208 ,179,255);
}
.note-textarea {
  width: 200px;
  height: 100px;
  margin-bottom: 10px;
  border-style: solid;
  border-color: rgb(189,137,255);
  border-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
}
 </style>