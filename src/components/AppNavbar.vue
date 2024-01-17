<template>
  <nav class="nav"> 
    <button @click="$emit('toggle-nav')">
      <i class="fas" :class="{ 'fa-bars': !isNavOpen, 'fa-times': isNavOpen }"></i>
    </button>
    <ul class="navbar">
      <li><i class="fas fa-user"></i> Profile</li>
      <li><i class="fas fa-bell"></i> Alerts</li>
      <li><i class="fas fa-sticky-note"></i> My Notes</li>
      <li><i class="fas fa-calendar-alt"></i> Calendar</li>
      <li>
        <router-link to="/Noticeboard" class="noticeboard-link">
          <i class="fas fa-clipboard"></i> Noticeboard
        </router-link>
      </li>
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

.noticeboard-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}



</style>
