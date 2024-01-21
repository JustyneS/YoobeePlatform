<template>
  <!-- The root component of your Vue app -->
  <div id="app">

    <!-- The AppNavbar component, with a prop for the open state of the navigation and an event listener for the toggle-nav and toggle-alerts events -->
    <app-navbar :is-nav-open="isNavOpen" @toggle-nav="isNavOpen = !isNavOpen" @toggle-alerts="showAlertsBox = !showAlertsBox" @toggle-profile="showProfileBox = !showProfileBox"/>
    <alerts-box v-show="showAlertsBox"/>
    
    <profile-box v-show="showProfileBox"/>
    <!-- The SideNav component, with a prop for the open state of the navigation -->
    <side-nav :is-open="isNavOpen"/>
    <!-- The router-view component, which displays the component for the current route -->
    <router-view></router-view>

  </div>
</template>

<script>
// Importing the AppNavbar and SideNav components
import AppNavbar from './components/AppNavbar.vue';
import SideNav from './components/SideNav.vue';
import AlertsBox from './components/AlertsBox.vue';
import ProfileBox from './components/Profile.vue';

export default {
  name: 'App', // The name of the component
  components: {
    AppNavbar, // The components used in this component
    SideNav,
    AlertsBox,
    ProfileBox,
  },
  data() {
    return {
      // The data property for storing the open state of the navigation
      isNavOpen: localStorage.getItem('isNavOpen') === 'true' || false,
      // The data property for storing the display state of the noticeboard
      showNoticeboard: false,
      showAlertsBox: false,
      showProfileBox: false,
    };
  },
  watch: {
    // Watcher for the isNavOpen data property
    isNavOpen(newVal) {
      // When isNavOpen changes, save the new value to localStorage
      localStorage.setItem('isNavOpen', newVal);
    },
  },
  methods: {
    // The method to toggle the display of the noticeboard
    toggleNoticeboard() {
      this.showNoticeboard = !this.showNoticeboard;
    },
  },
};
</script>
