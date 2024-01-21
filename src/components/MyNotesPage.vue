<template>
  <!-- The MyNotesPage component -->
  <div class="MyNotesPage" :class="{ 'shift-content': $store.state.isOpen }">  <!--Shift content will move the page content when the SideNav is open-->
    <h1>My Notes Page</h1>
    
    <!-- Displayed when the notes are being fetched -->
    <div v-if="loading">No notes yet...</div>
    
    <!-- Displayed when the notes have been fetched -->
    <div v-else-if="notes && notes.length">
      <!-- Loop through each note and display its content and timestamp -->
      <div class="note-box" v-for="(note, index) in notes" :key="index">
        <p>{{ note.content }}</p> <small>{{ note.timestamp }}</small>

        <!-- Buttons to edit and delete the note -->
        <div class="button-container"> 
          <button @click="editNote(index)">Edit</button>
          <button @click="deleteNote(index)">Delete</button>
        </div>

      </div>
    </div>
  </div>
</template>


<script>
  // Importing Firebase
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/database';

  export default {
    name: 'MyNotesPage', 
    data() {
      return {
        notes: [], // The data property for storing the notes
        loading: false, // The data property for storing the loading state
        isSideNavOpen: false, // The data property for storing the state of the side navigation
      };
    },
    methods: {
      // Method to fetch the notes from Firebase
      getNotes() {
        this.loading = true; // Set loading to true when fetching the notes
        firebase.database().ref('notes').on('value', snapshot => {
          const data = snapshot.val();
          // Map the data to an array of notes
          this.notes = Object.keys(data).map(key => {
            const date=new Date(data[key].timestamp);
            const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
            return {
              id: key,
              content: data[key].content,
              timestamp: formattedDate,
            }
          });
          this.loading = false; // Set loading to false after fetching the notes
        });
      },
      // Method to edit a note
      editNote(index) {
        const note = this.notes[index];
        const newContent = window.prompt("Edit your note:", note.content);
        if (newContent) {
          // Update the note in Firebase
          firebase.database().ref('notes/' + note.id).update({
            content: newContent,
          });
        }
      },
      // Method to delete a note
      deleteNote(index) {
        const note = this.notes[index];
        if (window.confirm("Are you sure you want to delete this note?")) {
          // Remove the note from Firebase
          firebase.database().ref('notes/' + note.id).remove();
        }
      },
    },
    // Fetch the notes when the component is mounted
    mounted() {
      this.getNotes();
    },
  };
</script>
 
<style scoped>
.shift-content {
  margin-left: 250px; 
}

.MyNotesPage {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1{
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  padding: 20px;
}
.note-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  width: 500px;
  background-color: rgb(243,233,255); 
}
.note-box p {
  margin-top: 15px;
  font-size: 16px; 
  color: #333; 
  font-family: Arial, Helvetica, sans-serif;
}

.note-box small {
  display: block; 
  color: #777; 
  margin-bottom: 10px; 
  font-family: Arial, Helvetica, sans-serif;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 10px; 
}

.note-box button {
  background-color: rgb(189,137,255);
  color: #fff; 
  border: none; 
  border-radius: 5px;
  padding: 5px 10px; 
  cursor: pointer; 
  text-align: center;
  width: fit-content;
}

.note-box button:hover {
  background-color: rgb(153,111,207); /* Change the background color of the buttons when hovered */
}
/* ... */
</style>

