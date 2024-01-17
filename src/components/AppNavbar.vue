<template>
  <nav class="nav"> 
    <button @click="toggleNav">
      <i class="fas" :class="{ 'fa-bars': !$store.state.isOpen, 'fa-times': $store.state.isOpen }"></i>
    </button>
    <ul class="navbar">
      <li><i class="fas fa-user"></i> Profile</li>
      <li><i class="fas fa-bell"></i> Alerts</li>
      <li><router-link class='MyNotesPage' to="/my-notes-page"><i class="fas fa-sticky-note"></i> My Notes</router-link></li>       
      <li><i class="fas fa-calendar-alt"></i> Calendar</li>
      <li><i class="fas fa-clipboard" @click="toggleNoticeboard"></i> Noticeboard</li>
    </ul>
    <img src="@/images/Yoobee_Logo.png" alt="Logo" class="logo">
  </nav>
</template>


<script>
export default {
  name: 'AppNavbar',
  props: ['isNavOpen'],
  methods: {
    toggleNoticeboard() {
      this.$emit('toggle-noticeboard');
    },
    toggleNav() {
      this.$store.commit('toggle')
    },
  },
}
</script>

<style scoped>

body, html {
  margin: 0;
  padding: 0;
}

button {
  background: none; 
  border: none; 
  padding: 0; 
  margin: 0; 
  color: rgb(56 56 56);
  font: inherit;
  font-size: 40px;
  cursor: pointer; 
}
.nav {
  width: 100%; 
  height: 115px;
  background-color: rgb(189,137,255);
  display: flex;
  justify-content: space-evenly;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
}
.logo {
  width: 200px;
  height: 90px;
}
.navbar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  margin: 0;
  padding: 0;
}
.navbar li {
  display: flex;
  flex-direction: column;
  align-items: center; 
  font-size: 20px;
  color: rgb(56 56 56);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer;
}
.navbar li i {
  font-size: 40px; 
}
.MyNotesPage {
  display: flex;
  flex-direction: column;
  align-items: center; 
  font-size: 20px;
  color: rgb(56 56 56);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer;

}
</style>
