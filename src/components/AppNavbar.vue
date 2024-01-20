<template>
  <!-- The navigation bar component -->
  <nav class="nav"> 
    <!-- The button that toggles the navigation menu open and closed -->
    <button @click="toggleNav">
      <!-- The icon changes based on whether the navigation menu is open or not -->
      <i class="fas" :class="{ 'fa-bars': !$store.state.isOpen, 'fa-times': $store.state.isOpen }"></i>
    </button>
    <!-- The list of items in the navigation menu -->
    <ul class="navbar">
      <li><i class="fas fa-user"></i> Profile</li>
      <!--Toggle for Alerts Box-->
      <li @click="$emit('toggle-alerts')"><i class="fas fa-bell"></i> Alerts</li>
      <!-- Link to the My Notes page -->
      <li><router-link class='MyNotesPage' to="/my-notes-page"><i class="fas fa-sticky-note"></i> My Notes</router-link></li>       
      <!-- Link to the Calendar page -->
      <li><router-link to="/EventCalendar" class="calendar-link"><i class="fas fa-clipboard"></i> Calendar</router-link></li>
      <!-- Link to the Noticeboard page -->
      <li><router-link to="/Noticeboard" class="noticeboard-link"><i class="fas fa-clipboard"></i> Noticeboard</router-link></li>
    </ul>
    <!-- The logo image -->
    <img src="@/images/Yoobee_Logo.png" alt="Logo" class="logo">
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar', // The name of the component
  props: ['isNavOpen'], // The props passed to the component
  methods: {
    // The method to toggle the navigation menu open and closed
    toggleNav() {
      // Commits the 'toggle' mutation to the Vuex store
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

.noticeboard-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.calendar-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

</style>
