<template>
  <div class="mondayPosts">
    <h1>Monday Posts</h1>


    
    <div class="postsContainer">
      <ul>
        <li><p class="postsItem">Week 1: What to do in your first week!</p></li>
        <li><p class="postsItem">Week 2: Discussing potentials!</p></li>
        <li><p class="postsItem">Week 3: Learning about the industry!</p></li>
        <li><p class="postsItem">Week 4: Gatthering information on proposed changes!</p></li>
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
  .mondayPosts {
    padding: 40px;
  }

  h1 {
    font-size: 40px;
    text-align: center;
  }

.postsContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    min-width: auto;
    padding-right: 20%;
    padding-left: 20%;
    background-color: rgb(226, 226, 226);
    border-radius: 10px;
}

.postsContainer li {
  cursor: pointer;
}

  .postsItem {
    font-size: 25px;
    padding:20px;   
    text-align: left;
    background-color: rgb(189,137,255);
    border-radius: 10px;
  }

  ul {
    list-style-type: none;
  }
  </style>