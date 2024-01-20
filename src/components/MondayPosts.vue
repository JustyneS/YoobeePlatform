<template>
  <div class="mondayPosts">
    <h1>Monday Posts</h1>

    <hr/>

    <div class="postsContainer">
      <ul>
        <hr class="seperator"/>
        <li><RouterLink to="week-one" class="item-links"><p class="postsItem">Week 1: What to do in your first week!</p> <p class="date">Date: 17/06/2023</p></RouterLink></li>
        <hr class="seperator"/>
       
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MondayPostsComponent',
};
</script>
  

  <style scoped>
  /* Your styling for the component goes here */

  .item-links {
    color: inherit;
    text-decoration: none;
  }
  .mondayPosts {
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