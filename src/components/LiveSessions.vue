<template>
    <div class="orientation">
      <h1>Live Sessions</h1>
  
      <hr/>
  
      <div class="postsContainer">
        <ul>
          <hr class="seperator"/>
          <li><p class="postsItem">There are currently no posts in this forum!</p></li>
          <hr class="seperator"/>
        </ul>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'LiveSessionsComponent',
};
</script>

<style scoped>
  /* Your styling for the component goes here */
  .orientation {
    padding: 40px;
    color: #2c3e50;
  }

  h1 {
    font-size: 40px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
  }

.postsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: auto;
    padding-top: 20px;
    padding-right: 20%;
    padding-left: 20%;
    
   
}

  .postsItem {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    padding:5px;   
    text-align: left;
    border-radius: 4px;
    min-width: 70%;
    margin: 5px;
  }

  ul {
    list-style-type: none;
  }

  .seperator {
  border: 0;
  border-top: 1px solid #ccc; /* Adjust color as needed */
  }
  </style>