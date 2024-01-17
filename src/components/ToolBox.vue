<template>
  <div class="toolbox" v-show="showBox">
    <button class="toolbox-button" @click="takeNote"><i class="fas fa-sticky-note"></i> Take Note</button>
    <button class="toolbox-button" @click="bookmarks"><i class="fas fa-bookmark"></i> Bookmark</button>
    <button class="toolbox-button" @click="startHighlight"><i class="fas fa-highlighter"></i> Highlight</button>
  </div>
  <button class="toggle-button" @click="toggleBox"><i class="fa-solid fa-screwdriver-wrench"></i></button>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ToolBox',
  data() {
    return {
      showBox: false,
      notes: [],
      bookmarks: [],
      highlights: [],
    };
  },
  methods: {
    toggleBox() {
      this.showBox = !this.showBox;
    },
    takeNote() {
      const note = window.prompt('Enter your note');
      if (note) {
        this.notes.push(note);
        this.$emit('add-note', note);
        axios.post('http://localhost:8000/notes/', { content: note });
      }
    },
    startHighlight() {
      this.showHighlight = true;
    },
  },
};
</script>


<style scoped>
.toolbox {
  position: fixed;
  top: 50%;
  right: 0;
  width: 200px;
  padding: 20px;
  background-color: rgba(248, 249, 250, 0.8);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  transform: translateY(-50%);
}
.toggle-button {
  position: fixed;
  top: 50%;
  right: 0;
  padding: 10px;
  font-size: 24px;
  background-color: #f8f9fa;
  border: none;
  cursor: pointer;
  transform: translateY(-50%);
}
.toolbox-button {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  text-align: left;
  color: #495057;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.toolbox-button:hover {
  background-color: #f8f9fa;
}
.toolbox-button i {
  margin-right: 10px;
}
</style>
