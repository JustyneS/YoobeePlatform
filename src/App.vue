  <template>
    <div id="app">
      <app-navbar :is-nav-open="isNavOpen" @toggle-nav="isNavOpen = !isNavOpen"/>
      <side-nav :is-open="isNavOpen"/>
      <!-- other components go here -->
    </div>
  </template>
  
  <script>
  import AppNavbar from './components/AppNavbar.vue'
  import SideNav from './components/SideNav.vue'
  
  export default {
    name: 'App',
    components: {
      AppNavbar,
      SideNav,
    },
    data() {
      return {
        isNavOpen: localStorage.getItem('isNavOpen') === 'true' || false,
      };
    },
    watch: {
    isNavOpen(newVal) {
      localStorage.setItem('isNavOpen', newVal);
    }
  }
}
  </script>
