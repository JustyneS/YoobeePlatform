<template>
    <!-- The root element of the AlertsBox component -->
    <div class="alerts-box" v-show="showBox">
      <!-- The header of the alerts box -->
      <div class="alerts-header"> 
        <!-- The heading for the new alerts -->
        <h3>New Alerts</h3>
        <!-- The heading for the remove alert checkbox -->
        <h3>Remove Alert</h3>
      </div>
      <!-- The container for the alerts -->
      <div class="alerts-container">
        <!-- Loop over each alert in the alerts array -->
        <div v-for="(alert, index) in alerts" :key="index" :class="{ 'alert-read': alert.read }" class="alert-item">
          <!-- Display the alert text -->
          <span>{{ alert.text }}</span>
          <!-- A checkbox for marking the alert as read -->
          <!-- The v-model directive creates a two-way binding between the checkbox and the read property of the alert -->
          <!-- The @change directive adds an event listener that calls the removeReadAlerts method when the checkbox is changed -->
          <input type="checkbox" v-model="alert.read" @change="removeReadAlerts">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AlertsBox', // The name of the component
    data() {
      return {
        showBox: false, // The data property for storing the display state of the alerts box
        alerts: [ // The data property for storing the alerts
          { text: '• Module One Assessment One submitted successfully', read: false },
          { text: '• Module One Assessment Two has been graded', read: false },
          { text: '• Module Three Assessment One is due 06/02/2024', read: false },
        ],
      };
    },
    methods: {
      // The method to remove read alerts
      removeReadAlerts() {
        // Filter the alerts array to remove alerts that have been read
        this.alerts = this.alerts.filter(alert => !alert.read);
      },
    },
  };
  </script>
  
  
  <style scoped>
  .alerts-box {
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
    overflow-y: auto;
    z-index: 1000;
  }  

  .alerts-header {
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 11px;
  }
  
  .alerts-container {
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