<template>
    <!-- The root element of the profileBox component -->
    <div class="profile-box" v-show="showBox">
      <!-- The header of the profile box -->
      <div class="profile-header"> 
        <!-- The heading for the new profile -->
        <h3>John Smith</h3>
        <!-- The heading for the remove alert checkbox -->
        
      </div>
      <!-- The container for the profile -->
      <div class="profile-container">
        <!-- Loop over each alert in the profile array -->
        <div v-for="(alert, index) in profile" :key="index" :class="{ 'alert-read': alert.read }" class="alert-item">
          <!-- Display the alert text -->
          <span>{{ alert.text }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProfileBox', // The name of the component
    data() {
      return {
        showBox: false, // The data property for storing the display state of the profile box
        profile: [ // The data property for storing the profile
          { text: '• Email: John.Smith@Yoobee.org', read: false },
          { text: '• Student Number: 44865922', read: false },
          { text: '• Course: Diploma in Software Development', read: false },
        ],
      };
    },
    methods: {
      // The method to remove read profile
      removeReadprofile() {
        // Filter the profile array to remove profile that have been read
        this.profile = this.profile.filter(alert => !alert.read);
      },
    },
  };
  </script>
  
  
  <style scoped>
  .profile-box {
    position: absolute;
    top: 126px;
    left: 10px;
    width: 405px;
    height: 160px; 
    background-color: rgb(255,255,255,0.9);
    border-style: solid;
    border-width: 2px;
    border-color: rgb(189,137,255);
    padding: 20px;
   z-index: 1000;

  }  

  h3 {
    margin-top: 0px;
  }

  .profile-header {
    display: flex;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
  }
  
  .profile-container {
    display: flex;
    flex-direction: column;
  }

  .alert-item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc; 
    padding: 10px 0; 
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
  }

  </style>