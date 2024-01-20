<template>
  <!-- The side navigation component -->
  <div id="sidenav" :class="{ open: $store.state.isOpen }">
    <!-- The list of modules -->
    <ul>
      <!-- Module 1 -->
      <li>
        <!-- The link to toggle the display of Module 1's topics -->
        <a class="module" @click="isOpen1 = !isOpen1">MODULE 1</a>
        <!-- The list of Module 1's topics, displayed if isOpen1 is true -->
        <ul v-show="isOpen1">
          <router-link class="module" to="/module-one">Introduction</router-link>
          <li><router-link class="topic" to="/module-one#topic-1-1">Topic 1</router-link></li>
          <li><router-link class="topic" to="/module-one#topic-1-2">Topic 2</router-link></li>
          <li><router-link class="topic" to="/module-one#topic-1-3">Topic 3</router-link></li>
        </ul>
      </li>
      <!-- Module 2 -->
      <li>
        <!-- The link to toggle the display of Module 2's topics -->
        <a class="module" @click="isOpen2 = !isOpen2">MODULE 2</a>
        <!-- The list of Module 2's topics, displayed if isOpen2 is true -->
        <ul v-show="isOpen2">
          <router-link class="module" to="/module-two">Introduction</router-link>
          <li><router-link class="topic" to="/module-two#topic-2-1">Topic 1</router-link></li>
          <li><router-link class="topic" to="/module-two#topic-2-2">Topic 2</router-link></li>
          <li><router-link class="topic" to="/module-two#topic-2-3">Topic 3</router-link></li>
        </ul>
      </li>
      <!-- Module 3 -->
      <li>
        <!-- The link to toggle the display of Module 3's topics -->
        <a class="module" @click="isOpen3 = !isOpen3">MODULE 3</a>
        <!-- The list of Module 3's topics, displayed if isOpen3 is true -->
        <ul v-show="isOpen3">
          <router-link class="module" to="/module-three">Introduction</router-link>
          <li><router-link class="topic" to="/module-three#topic-3-1">Topic 1</router-link></li>
          <li><router-link class="topic" to="/module-three#topic-3-2">Topic 2</router-link></li>
          <li><router-link class="topic" to="/module-three#topic-3-3">Topic 3</router-link></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen1: false, // The data property for storing the open state of Module 1's topics
      isOpen2: false, // The data property for storing the open state of Module 2's topics
      isOpen3: false, // The data property for storing the open state of Module 3's topics
    };
  },
  methods: {
    // The method to toggle the side navigation
    toggleSidebar() {
      // Commits the 'toggle' mutation to the Vuex store
      this.$store.commit('toggle')
    }
  }
};
</script>
  
  <style scoped>
  #sidenav {
    width: 0;
    position: absolute;
    z-index: 1;
    top: 115;
    left: 10;
    background-color: rgb(242 242 242);
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    border-width: 15px;
    height: 100%;
  }

  #sidenav ul{
    list-style-type: none;
    margin-bottom: 15px;
  }
  
  #sidenav.open {
    width: 250px;
    height: 600px;
  }

  .module {
    font-size: 20px;
    color: rgb(189,137,255);
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer; 
  }

  .topic {
    font-size: 20px;
    color: rgb(56 56 56);
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
  }

</style>
