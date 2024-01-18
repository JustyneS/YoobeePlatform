<template>
    <div class="orientation">
      <h1>Orientation</h1>
  
      <hr/>
  
      <div class="postsContainer">
        <ul>
          <hr class="seperator"/>
          <li><p class="postsItem">Course Outline</p> <p class="date">Date: 17/06/2023</p></li>
          <hr class="seperator"/>
          <li><p class="postsItem">Welcome to your online studies!</p><p class="date">Date: 09/07/2023</p></li>
          <hr class="seperator"/>
        </ul>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'OrientationComponent',
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

.postsContainer li {
  cursor: pointer;
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

  .date {
    margin: 0;
    text-align: right;
  }
  </style>