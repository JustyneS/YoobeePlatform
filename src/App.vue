<template>
  <div id="app">
    <app-navbar :is-nav-open="isNavOpen" @toggle-nav="isNavOpen = !isNavOpen" @toggle-noticeboard="toggleNoticeboard" />
    <side-nav :is-open="isNavOpen"/>
    <noticeboard-component v-if="showNoticeboard" />
    <!-- other components go here -->
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import SideNav from './components/SideNav.vue'
import NoticeboardComponent from './components/Noticeboard.vue'

export default {
  name: 'App',
  components: {
    AppNavbar,
    SideNav,
    NoticeboardComponent,
  },
  data() {
    return {
      isNavOpen: localStorage.getItem('isNavOpen') === 'true' || false,
      showNoticeboard: false,
    };
  },
  watch: {
    isNavOpen(newVal) {
      localStorage.setItem('isNavOpen', newVal);
    },
  },
  methods: {
  toggleNoticeboard() {
    this.showNoticeboard = !this.showNoticeboard;
  },
},
};
</script>
