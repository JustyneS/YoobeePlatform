<!-- Noticeboard.vue -->
<template>

  <div class="noticeboard">
    <h1>Welcome to the Noticeboard!</h1>

    <div class="noticeboardMenu">
      <ul>
        <li><router-link to="/orientation" class="menuItems">Orientation<i class="fas fa-circle-plus"></i></router-link></li>
        <li><router-link to="/monday-posts" class="menuItems">Monday Posts<i class="fas fa-circle-plus"></i></router-link></li>
        <li><router-link to="/live-sessions" class="menuItems">Live Session Recordings<i class="fas fa-circle-plus"></i></router-link></li>
        <!-- Add similar router-link elements for other menu items -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoticeboardComponent',
};
</script>


<style scoped>
/* Your styling for the component goes here */
.noticeboard {
  padding: 40px;
}

h1 {
  font-size: 40px;
  text-align: center;
}

.noticeboardMenu {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-width: auto;
  padding-right: 20%;
  padding-left: 10%;
}

.noticeboardMenu li {
  cursor: pointer;
  margin: 25px;
}

.menuItems {
  font-size: 25px;
  padding: 25px;
  text-align: left;
  text-decoration: none;
  color: inherit;
}

.fas.fa-circle-plus {
  padding-left: 10px;
}

ul {
  list-style-type: none;
}
</style>
